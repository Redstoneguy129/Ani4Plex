import { Box, Typography, Button } from "@mui/material";
import Modal from "../../styles/Modal";
import React from "react";

export default function Connections({title}: {title: string}) {
    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <Button onClick={() => setOpen(true)} color="inherit">Connections</Button>
            <Modal open={open} onClose={() => setOpen(false)} hideBackdrop={true}>
                <Box sx={{ position: 'absolute', background: '#152232', p: 4, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <Typography variant="h6">
                        {title}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}