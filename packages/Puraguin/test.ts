import Puraguin, { AuthType } from ".";

class Plex extends Puraguin {
    constructor() {
        super("", AuthType.OATH);
    }
}

export default Plex;