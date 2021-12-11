import React, { useState } from 'react';
import Form from './Form';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';


function NavHeader() {

    const [open, setOpen] = useState(false);

    const HandleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Grid display="grid" spacing={4} columns={4} justifyContent="flex-end">
                <div>
                    <nav className="navSection">
                        <div class="header">

                            <a class="active" href="#home" onClick={HandleOpen}>Favoritos</a>

                            <a class="active" href="#home">Agregar</a>

                        </div>
                    </nav>
                </div>
            </Grid>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}

            >
                <Form />
            </Modal>
        </>
    )
}

export default NavHeader;