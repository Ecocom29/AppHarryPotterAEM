import React, { useState } from 'react';
import Form from './Form';
import Modal from '@mui/material/Modal';


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
            <nav className="navSection">
                <div class="header">
                    <a class="active" href="#home" onClick={HandleOpen}>Favoritos</a>
                    <a class="active" href="#home">Agregar</a>
                </div>
            </nav>
            <Modal
               aria-labelledby="transition-modal-title"
               aria-describedby="transition-modal-description"
               open={open}
               onClose={handleClose}
               closeAfterTransition
               BackdropProps={{
                 timeout: 500,
               }}
            >
                 <Form />
            </Modal>
        </>
    )
}

export default NavHeader;