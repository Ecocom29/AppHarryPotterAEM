import React from 'react';
import './../../Styles/loading-style.scss';
import Grid from '@mui/material/Grid';

const Loader = () => {
    return (
        <>
            <Grid  container rowSpacing={12} sx={{ marginTop: 10,  marginLeft:550,}} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <div class="lds-facebook">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </Grid>
        </>
    )
}

export default Loader;