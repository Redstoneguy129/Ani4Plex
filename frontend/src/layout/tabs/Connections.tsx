import { Box, Typography, Button } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import Modal from "../../styles/Modal";
import Fade from '@mui/material/Fade';
import React from "react";

export default function Connections({noButton = false}: {noButton?: boolean}) {
    const [open, setOpen] = React.useState(false);
    return (
        <div>
            { !noButton ? <Button onClick={() => setOpen(true)} color="inherit">Connections</Button> : <a onClick={() => setOpen(true)}>Connections</a>}
            
            <Modal open={open} onClose={() => setOpen(false)} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
                <Fade in={open}>
                    <Box sx={{ position: 'absolute', borderRadius: 3, background: '#152232', p: 4, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="h6" align="center" sx={{ color: '#FFFFFF' }}>
                            Connection
                        </Typography>
                        <Typography sx={{ mt: 2, mb: 2, color: '#FFFFFF' }}>
                            You currently do not have any connections!
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained">Add Connection</Button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}