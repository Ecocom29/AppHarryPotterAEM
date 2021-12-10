import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function ItemCard() {
    const theme = useTheme();
    return (
        <>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 100, border:10, borderBlockColor: "#3FCB08" }}
                    image="https://www.jotdown.es/wp-content/uploads/2021/02/harry-potter1.jpg"
                    alt="album cover human"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Draco Malfoy
                        </Typography>
                        <Typography variant="subtitle3"  color="text.secondary" component="div">
                            Cumpleaños: 31-07-1980
                        </Typography>
                        <Typography variant="subtitle3"  color="text.secondary" component="div">
                            Genero: Male
                        </Typography>
                        <Typography variant="subtitle3"  color="text.secondary" component="div">
                            Color de ojos: Verdes
                        </Typography>
                        <Typography variant="subtitle3"  color="text.secondary" component="div">
                            Color de pelo: Dorado
                        </Typography>
                    </CardContent>
                   {/*  <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="previous">
                            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        <IconButton aria-label="play/pause">
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="next">
                            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                        </IconButton>
                    </Box> */}
                </Box>

            </Card>
        </>
    )
}

export default ItemCard;