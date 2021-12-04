import { CardMedia, LinearProgress, Typography, Button } from "@mui/material";
import { CardContent, Card } from "../styles";
import React from "react";

export default function Show({title, watched = 0, episodes}: {title: string, watched?: number, episodes: number}) {
    const [complete, setComplete] = React.useState(false);

    //<Button sx={{ position: 'static' }} onClick={() => setComplete(!complete)}>Toggle</Button>
    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardMedia component="img" image={"/static/"+title+".jpg"} alt="Boku No Hero Academia"/>
            <CardContent>
                <LinearProgress color={ (watched === 0) ? "error" : ((watched === episodes) ? "success" : "primary") } variant="determinate" value={ complete ? 100 : (watched/episodes)*100 } />
                <Typography sx={{ color: '#FFFFFF' }} variant="subtitle1" align="center">
                    { (watched===0) ? "Not Started" : ((watched === episodes) ? "Complete " + "("+watched+"/"+episodes+")" : "Watching " + "("+watched+"/"+episodes+")") }
                </Typography>
            </CardContent>
        </Card>
    );
}