import axios, { AxiosInstance } from "axios";
import { randomUUID } from "crypto";
import { XMLParser } from "fast-xml-parser";

export type Episode = {
    title: string,
    order: number
}

export type Season = {
    order: number,
    episodes: Episode[]
}

export type Show = {
    title: string,
    originalTital: string,
    summary: string
    userRating: number,
    year: number,
    seasons: Season[]
}

export type PlexAuth = {
    username: string,
    token?: string,
    password?: string
}

export type PlexHeaders = {
    'X-Plex-Client-Identifier': string,
    'X-Plex-Device-Name': string,
    'X-Plex-Device': string,
    'X-Plex-Product': string,
    'X-Plex-Platform': string,
    'Accept': string,
    'X-Plex-Token'?: string,
    Authorization?: string
}

type Server = {
    name: string,
    accessToken: string,
    address: string
}

type Library = {
    title: string,
    key: number
}

export default class Plex {
    private serverName: string;
    private library: Library = {title: "", key: 0};
    private authentication: PlexAuth

    private api: AxiosInstance;
    private apiLocal!: AxiosInstance;
    private headers: PlexHeaders = {
        'X-Plex-Client-Identifier': randomUUID(),
        'X-Plex-Device-Name': "Ani4Plex",
        'X-Plex-Device': "Linux",
        'X-Plex-Product': "PlexAPI",
        'X-Plex-Platform': "Linux",
        'Accept': 'application/json',
    }
    private parser: XMLParser = new XMLParser({ attributeNamePrefix: "", ignoreAttributes: false });

    constructor(serverName: string, libraryName: string, authentication: PlexAuth) {
        this.serverName = serverName;
        this.authentication = authentication;
        if (!authentication.token && !authentication.password) {
            throw "No Token or Password Provided";
        }
        if (!authentication.token && authentication.password) {
            const credentials = 'Basic ' + Buffer.from(`${authentication.username}:${authentication.password}`).toString('base64')
            const credheader = this.headers;
            credheader.Authorization = credentials;
            axios({ method: 'POST', url: 'https://plex.tv/users/sign_in.json', headers: credheader }).then((out) => {
                let token: string = out.data["user"]["authentication_token"];
                authentication.token = token
                this.headers['X-Plex-Token'] = authentication.token;
            })
        }
        if (authentication.token) {
            this.headers['X-Plex-Token'] = authentication.token;
        }
        this.api = axios.create({
            baseURL: 'https://plex.tv/',
            timeout: 2000,
            headers: this.headers
        });
        this.api.get('/api/servers').then((out) => {
            const parsedServers: Server | Server[] = this.parser.parse(out.data).MediaContainer.Server;
            const server: Server = Array.isArray(parsedServers) ? parsedServers.filter(srv => srv.name == this.serverName)[0] : parsedServers;
            axios({method: 'GET', url: `http://${server.address}:32400/library/sections`, headers: { 'X-Plex-Token': server.accessToken }}).then((out) => {
                const libraries: Library[] = out.data.MediaContainer.Directory;
                const library = libraries.filter(lib => lib.title == libraryName)[0];
                this.library = {title: library.title, key: library.key};
            })
            let apiLocalHeaders = this.headers;
            apiLocalHeaders["X-Plex-Token"] = server.accessToken;
            this.apiLocal = axios.create({
                baseURL: `http://${server.address}:32400/`,
                timeout: 2000,
                headers: apiLocalHeaders
            });
        })
    }

    isReady(): boolean {
        return Boolean(this.library && this.authentication.token);
    }

    async getShows(): Promise<Show[]> {
        if(!this.isReady) throw "Plex is not ready!";
        const show: Show[] = (await this.apiLocal.get(`/library/sections/${this.library.key}/all`)).data.MediaContainer.Metadata
        const shows: Show[] = show.filter(shw => shw.year != undefined);
        return Promise.resolve(shows);
    }
}