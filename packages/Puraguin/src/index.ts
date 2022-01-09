export enum AuthType {
    USER,
    KEY,
    OATH
}

export interface Puraguin {
    getShows?(): string[];
}

export abstract class Puraguin {
    readonly name: string;
    readonly auth: AuthType | undefined;
    constructor(name: string, auth?: AuthType) {
        this.name = name;
        this.auth = auth;
    }
}

export default Puraguin;