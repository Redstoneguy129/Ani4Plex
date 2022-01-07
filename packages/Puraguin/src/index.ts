export enum AuthType {
    NIL,
    KEY,
    USER
}

abstract class Puraguin {
    readonly authType: AuthType;

    constructor(authType: AuthType) {
        this.authType = authType;
    }

    abstract getShow(): void;
}

export default Puraguin;