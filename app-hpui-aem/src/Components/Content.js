import React, { useState } from 'react';
import NavHeader from './NavHeader';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ItemCard from './ItemCard';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Content() {

    return (
        <div className="bodyContent">
        <Container >
            <NavHeader />
            <Grid container spacing={1} justifyContent="center"  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <h2>Selecciona un filtro</h2>
                <div>
                    <Grid Item xs={4}>
                        <Button variant="outlined" size="large" >ESTUDIANTES</Button>
                    </Grid>
                </div>
                <div>
                    <Grid Item xs={4}>
                        <Button variant="outlined" size="large">STAFF</Button>
                    </Grid>
                </div>
            </Grid>
            <br />
            <br />
            <Grid container spacing={2}  justifyContent="center"  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <div>
                    <Grid Item xs={11}>
                        <ItemCard />
                    </Grid>
                </div>
                <div>
                    <Grid Item xs={11}>
                        <ItemCard />
                    </Grid>
                </div>
            </Grid>
            
        </Container>
        </div>
    )
}

export default Content;