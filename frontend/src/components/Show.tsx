import { CardMedia, LinearProgress, Typography, Button } from "@mui/material";
import { CardContent, Card } from "../styles";
import React from "react";

export default function Show() {
    const [complete, setComplete] = React.useState(false);

    //<Button sx={{ position: 'static' }} onClick={() => setComplete(!complete)}>Toggle</Button>
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" image="/static/Boku No Hero Academia.jpg" alt="Boku No Hero Academia"/>
            <CardContent>
                <LinearProgress color={ complete ? "success" : "primary" } variant="buffer" value={ complete ? 100 : 76 } />
                <Typography variant="subtitle1" align="center">
                    { complete ? "Complete" : "Watching" }
                </Typography>
            </CardContent>
        </Card>
    );
}