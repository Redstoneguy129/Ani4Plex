import { Button, Typography } from "@mui/material";
import { AppBar, Toolbar } from "../components";

export default function Navbar() {
    return (
        <AppBar position="static" elevation={0}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Ani4Plex
                </Typography>
                <div style={{ flexGrow: 1 }}>
                    <Button color="inherit">Browse</Button>
                    <Button color="inherit">Browse</Button>
                    <Button color="inherit">Settings</Button>
                </div>
                <Button color="inherit">Logout</Button>
            </Toolbar>
        </AppBar>
    );
}