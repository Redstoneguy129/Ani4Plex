require('dotenv').config();

import express from "express";

const app = express();
const port = 3000;

import api from "./api/index";
app.use('/api', api);

app.get('/', (req, res) => {
    res.send("react app")
})

import PlexModule from "./modules/PlexModule";
const plex = new PlexModule(process.env.AP_SERVER_NAME as string, process.env.AP_LIBRARY_NAME as string, {
    username: process.env.AP_USERNAME as string,
    password: process.env.AP_PASSWORD as string
});
setTimeout(main, 2000)
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

async function main() {
    plex.getShows().then(shows => console.log(shows))
}