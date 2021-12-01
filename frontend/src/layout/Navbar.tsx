import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
    return (
        <Box>
            <AppBar color="secondary">
                <Toolbar>
                <Typography variant="h6">
                    News
                </Typography>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Settings</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}