import React, { useState, useEffect } from 'react';
import NavHeader from '../Header/NavHeader';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { helperHttp } from '../../Helpers/helperHttp';
import Loader from '../Layout/Loader';
import Mensaje from '../Layout/Mensaje';
import ItemCard from '../Cards/ItemCard'
import { formLabelClasses, useMediaQuery } from '@mui/material';
import lghp_bg from './../../Image/lghp_bg.png';

const BootstrapButton = styled(Button)({
    fontWeight: "lighter",
    fontSize: 16,
    padding: '6px 12px',
    width: 200,
    maxWidth: 130,
    height: 50,
    borderRadius: 0,
    backgroundColor: '#727272',
    border: '5px solid #8350AB',
    '&:hover': {
        backgroundColor: '#A984C7',
        borderColor: '#A984C7',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#8350AB',

    },
    '&:focus': {
        backgroundColor: '#8350AB',
        border: '5px solid #8350AB'
    },
});


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Content() {
    const [db, setDB] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    let api = helperHttp();
    let url = "http://localhost:5000/harrypotter";

    useEffect(() => {
        setLoading(true);
        setInterval(() => {
            helperHttp().get(url).then(res => {

                if (!res.err) {
                    setDB(res);
                    setError(null)
                } else {
                    console.log(res)
                    setDB(null);
                    setError(res);
                }
                setLoading(false);
            })
        }, 10000);
    }, []);

    const filtrarLista = (filtro) => {

        let listFilter = db.filter(item => item.hogwartsStaff == filtro);

        console.log(listFilter);

        setDB(listFilter)
    }

    return (
        <div className="bodyContent">
            <Container   >
                <NavHeader />

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Stack Item xs={12} >
                        <div >
                            <img src={lghp_bg} className="divImage" />
                        </div>
                    </Stack>
                    <Stack Item xs={12} >
                        <div className="txtTitulo">
                            <h2>Selecciona tu filtro</h2>
                        </div>
                    </Stack>
                    <Stack direction="row" spacing={2} sx={{ maxWidth: 'xl' }} >
                        <BootstrapButton variant="contained" disableRipple onClick={() => filtrarLista(false)}>

                            ESTUDIANTES
                        </BootstrapButton>
                        <BootstrapButton variant="contained" disableRipple onClick={() => filtrarLista(true)}>
                            STAFF
                        </BootstrapButton>

                    </Stack>
                    <Stack Item xs={12} >
                        <br />
                    </Stack>
                    <Stack Item xs={12} >
                        <br />
                    </Stack>
                </Box>
                <div className="divContainer">
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Grid container spacing={6} columns={{ xs: 12, md: 9 }} >
                            {loading && <Loader />}
                            {error && <Mensaje msg={error} bgColor="#dc3545" />}
                            {db ? (<ItemCard data={db} />) : (<Stack Item xs={12} >
                                <div className="txtTitulo">
                                    <h2>Selecciona tu filtro</h2>
                                </div>
                            </Stack>)}
                        </Grid >
                    </Box>
                </div>
            </Container>

        </div>
    )
}

export default Content;