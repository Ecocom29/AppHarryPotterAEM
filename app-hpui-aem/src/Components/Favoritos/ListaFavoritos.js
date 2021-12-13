import React, {useReducer} from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';


const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

function ListaFavoritos() {

    

    const listFavoritos = [
        {
            id: 1,
            name: "Minerva McGonagall",
            image: "http://hp-api.herokuapp.com/images/mcgonagall.jpg"
        },
        {
            id: 2,
            name: "Severus Snape",
            image: "http://hp-api.herokuapp.com/images/mcgonagall.jpg"
        }
    ];

   

    return (

        <Grid sx={{ flexGrow: 1 }} container spacing={2} justifyContent="flex-end">
            <div className="listaFavoritos">
                <List
                    sx={{ width: 250, height: 100, maxWidth: 360,  marginTop: 2 }}
                    component="nav"
                >
                    {
                        listFavoritos.map((item => {
                            return (
                                <>
                                    <ListItem 
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="delete" >
                                                <DeleteOutline sx= {{ color: grey[100] }}/>
                                            </IconButton>
                                        }>
                                        <Avatar sx={{ width: 25 , height: 25 }} src={item.image} />
                                        <ListItemText secondary={
                                            <>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="white"
                                                >
                                                    {item.name}
                                                </Typography>
                                            </>
                                        } />

                                    </ListItem>
                                    <Divider />
                                </>
                            )
                        }))
                    }
                </List>
            </div>
        </Grid>
    )
}

export default ListaFavoritos;