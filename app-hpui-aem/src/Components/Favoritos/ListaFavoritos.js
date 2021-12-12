import React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import { fontSize } from '@mui/system';
import Typography from '@mui/material/Typography';

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
                    sx={{ width: 220, maxWidth: 360, height: 150, marginTop: 4 }}
                    component="nav"
                >
                    {
                        listFavoritos.map((item => {
                            return (
                                <>
                                    <ListItem 
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="delete">
                                                <DeleteOutline />
                                            </IconButton>
                                        }>
                                        <Avatar sx={{ width: 25 , height: 25 }} src={item.image} />
                                        <ListItemText secondary={
                                            <>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
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

                {/* <ListItem disablePadding>
                                        <Avatar sx={{ width: 30, height: 30 }} src={item.image} />
                                        <ListItemText primary={item.name} />
                                        <Divider />
                                    </ListItem>  */}
                {/* <List
                    sx={{ width: 220, maxWidth: 360, height: 150, marginTop: 4 }}
                    aria-label="contacts"
                >
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <StarIcon />
                            </ListItemIcon>
                            <ListItemText primary="Chelsea Otakan" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText inset primary="Eric Hoffman" />
                        </ListItemButton>
                    </ListItem>
                </List> */}

            </div>
        </Grid>

    )
}

export default ListaFavoritos;