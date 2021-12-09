import React from 'react';
import NavHeader from './NavHeader';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ItemCard from './ItemCard';
import Form from './Form';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Content() {
    return (
        <Container>
            <NavHeader />
            <Grid container spacing={2} justifyContent="center">

                <div className="buttonSection">
                    <h2>Selecciona un filtro</h2>
                    <Button variant="outlined" size="large">Outlined</Button>
                    <Button variant="outlined" size="large">Outlined</Button>
                </div>
            </Grid>
            <br />

            <Grid container spacing={2} justifyContent="center">
                <Grid xs={4}>
                    <ItemCard />
                </Grid>
                <Grid xs={4}>
                    <ItemCard />
                </Grid>
            </Grid>

            <Form/>
        </Container>
    )
}

export default Content;