import React, { useState } from 'react';
import Formulario from './../Form/Formulario'
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Bookmark from '@mui/icons-material/Bookmark';
import PersonAddAlt1 from '@mui/icons-material/PersonAddAlt1';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import ListaFavoritos from '../Favoritos/ListaFavoritos';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function NavHeader() {

    const [open, setOpen] = useState(false);
    const [hideLista, setHideLista] = useState(false);

    const HandleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const MostrarLista = () => {
        

        hideLista ? setHideLista(false): setHideLista(true);
        

        console.log(hideLista)
    }

    const style = {
        display: "flex",
        width: 600,
        height: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        p: 2,
        px: 4,
        pb: 3,
    };

    return (
        <>

            <Grid sx={{ flexGrow: 1 }} container spacing={2} justifyContent="flex-end">
                <nav className="navSection">
                    <Stack direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}>
                        <Button variant="text" className="navButton"  onClick={MostrarLista}>
                            FAVORITOS
                            <Bookmark />
                        </Button>
                        <Button variant="text" className="navButton" onClick={HandleOpen}>
                            AGREGAR
                            <PersonAddAlt1 />
                        </Button>
                    </Stack>
                </nav>
                {/* <nav className="navSection">
                    <div >
                        <div>
                            <Grid item xs={8}>
                                <a variant="text" className="navButton" >
                                   
                                    Favoritos
                                    <Bookmark/>
                                    </a>
                            </Grid>
                        </div>
                        <Grid item xs={8}>
                            <a variant="text" className="navButton" onClick={HandleOpen}>
                           Agregar
                           <PersonAddAlt1/>
                           </a>
                        </Grid>
                    </div>
                </nav> */}
            </Grid>
           

            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                sx={{
                    style
                    /*  display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center', */
                }}

            >

                <Formulario />
                {/* <Form /> */}
            </Modal>
            <ListaFavoritos />
        </>
    )
}

export default NavHeader;