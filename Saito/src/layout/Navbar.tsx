import { Box, Button, IconButton, MenuItem, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Connections from "./tabs/Connections";
import { AppBar, Toolbar, Menu } from "../styles";
import React from "react";

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" elevation={0}>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' }
                        }}
                    >
                        <MenuItem key={"Connections"} sx={{ color: '#FFFFFF' }} onClick={handleCloseNavMenu}>
                            <Connections noButton/>
                        </MenuItem>
                    </Menu>
                </Box>
                <div style={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'left' }}>
                        <Box component="img" sx={{ height: 64 }} alt="Logo" src={"./logo192.png"} />
                    </div>
                </div>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Connections/>
                </Box>
                <Button color="inherit">Logout</Button>
            </Toolbar>
        </AppBar>
    );
}