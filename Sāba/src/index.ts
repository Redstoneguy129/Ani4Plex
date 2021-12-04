//import dotenv from "dotenv";
//dotenv.config();

import express from "express";
import path from "path";

const app = express();
const port = 3050;
console.log(__dirname)

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../Saito')));
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../Saito', 'index.html'));
    });
}

import api from "./api/index";
app.use('/api', api);

/*import PlexModule from "./modules/PlexModule";
const plex = new PlexModule(process.env.AP_SERVER_NAME as string, process.env.AP_LIBRARY_NAME as string, {
    username: process.env.AP_USERNAME as string,
    password: process.env.AP_PASSWORD as string
});*/
setTimeout(main, 2000)

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

async function main() {
    //plex.getShows().then(shows => console.log(shows))
}