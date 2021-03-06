import React, { useState, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';
import { Button, Stack } from '@mui/material';
import { TYPES } from './../Store/actions';
import { admReducers, initialState } from './../Store/reducer';

function ItemCard({ data }) {
    
    const theme = useTheme();
    const [AddFavorito, setAddFavorito] = useState("");
    const [state, dispatch] = useReducer(admReducers, initialState);
    
    const { listItems, favoritos } = state;

    const delItemFavoritos = (id)=>{
        
    dispatch({type: TYPES.ADD_ITEM_FAVORITE, payload: id })
       console.log(id)
    }
  
    return (
        <>
            {
               data.map(item => {
                    return (
                        <Grid item xs={2} sm={4} md={4} key={item.id} sx={ { maxWidth:'xl'}}>

                            <Card sx={{ display: 'flex' }} >
                                <div className="avatarBackground">
                                    <Avatar sx={{ width: 140, height: 140 }} src={item.image} />
                                </div>
                                <Box sx={{ display: 'block', flexDirection: 'column' ,maxWidth:'xl'  }}>
                                    <Stack direction="row" spacing={12} alignItems="flex-end" mt={1} >
                                        <Typography component="div" variant="subtitle2">
                                            {item.alive ? "VIVO" : "FINADO"} /  {item.species}
                                        </Typography>
                                        <IconButton color="inherit" key={item} component="span"  onClick={()=>delItemFavoritos(item.id)}>
                                            <BookmarkBorder />
                                        </IconButton>
                                    </Stack>
                                    
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary" component="div">
                                            Cumplea??os: {item.dateOfBirth}
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary" component="div">
                                            Genero: {item.gender}
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary" component="div">
                                            Color de ojos: {item.eyeColour}
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary" component="div">
                                            Color de pelo: {item.hairColour}
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Card>
                        </Grid>

                    )
                })
            }

        </>
    )
}

export default ItemCard;