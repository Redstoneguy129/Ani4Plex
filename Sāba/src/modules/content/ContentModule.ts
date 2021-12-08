import type { Show } from "../../types/Content";
import type { API, Password } from "../../types/Auth";

export abstract class ContentModule {
    private name: string;
    private url: string;
    private auth: API | Password;

    constructor(name: string, url: string, auth: API | Password) {
        this.name = name;
        this.url = url;
        this.auth = auth;
    }

    getName(): string {
        return this.name;
    }

    getUrl(): string {
        return this.url;
    }

    abstract getShows(): Show[];
}