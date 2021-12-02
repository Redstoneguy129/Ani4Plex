import { Typography } from "@mui/material";
import React from "react";
import Show from "../components/Show";

type show = {
    title: string,
    watched?: number,
    episodes: number
}
var shows: show[] = [];
shows = [
    {
        title: "Boku No Hero Academia",
        watched: 6,
        episodes: 12
    },
    {
        title: "Boku No Hero Academia",
        episodes: 4
    },
    {
        title: "Boku No Hero Academia",
        watched: 24,
        episodes: 24
    },
    {
        title: "Boku No Hero Academia",
        watched: 7,
        episodes: 8
    }
];;

export default class Page extends React.Component {
    getShows() {
        const showsComp: JSX.Element[] = [];
        shows.forEach(showe => {
            showsComp.push(<Show title={showe.title} watched={showe.watched} episodes={showe.episodes}/>)
        });
        return showsComp;
    }
    NoShows() {
        return shows.length === 0;
    }
    render(): React.ReactNode {
        return (
            <div>
                {
                    this.NoShows() ? 
                    <>
                        <Typography variant="h6" align="center" sx={{ color: '#FFFFFF' }}>There doesn't seem to be any shows added.</Typography>
                        <Typography variant="h6" align="center" sx={{ color: '#FFFFFF' }}>Perhaps add a connection.</Typography>
                    </> : 
                    <div style={{ display: 'flex', marginTop: 15, flexWrap: 'wrap', rowGap: 15, columnGap: 15, alignItems: 'center', justifyContent: 'center'  }}>
                        {this.getShows()}
                    </div>
                }
            </div>
        );
    }
}