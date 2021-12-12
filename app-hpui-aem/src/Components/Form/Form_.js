import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { helperHttp } from '../../Helpers/helperHttp';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

function Form() {
    const [db, setDB] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const theme = createTheme();
    let api = helperHttp();
    let url = "http://localhost:5000/harrypotter";

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const objData = {
            id: Date.now(),
            name: formData.get('txtNombre'),
            species: formData.get('rdoPosicion'),
            gender: formData.get('rdoGender'),
            house: "",
            dateOfBirth: formData.get('txtCumpleaneos'),
            yearOfBirth: "",
            ancestry: "",
            eyeColour: formData.get('txtColorOjos'),
            hairColour: formData.get('txtColorPelo'),
            patronus: "",
            hogwartsStudent: "",
            hogwartsStaff: "",
            actor: "",
            alive: true,
            image: formData.get('txtFotografia')
        }

        let options = {
            body: objData,
            headers: { "content-type": "application/json" }
        };

        api.post(url, options).then((res) => {
            if (!res.err) {
                setDB([...db, res]);
            } else {
                setError(res);
            }
        });
    };

    return (
            <Grid >

               
                <Box
                 
                  
                 sx={{
                     marginTop: 30,
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     backgroundColor: 'white',
                 }}
                >

                    <Typography component="h1" variant="h5">
                        Agregar personaje
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} >
                        <Grid container spacing={12}>
                            <Grid item xs={11} sm={4}>
                                <TextField
                                    required
                                    name="txtNombre"
                                    label="NOMBRE"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    name="txtCumpleaneos"
                                    label="CUMPLEAÑOS"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    name="txtColorOjos"
                                    label="COLOR DE OJOS"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                />
                            </Grid>
                            <Grid item xs={11} sm={4}>
                                <TextField
                                    required
                                    name="txtColorPelo"
                                    label="COLOR DE PELO"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControl component="fieldset" required>
                                    <FormLabel component="rdoGender">GENERO</FormLabel>
                                    <RadioGroup

                                        row
                                        aria-label="gender"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="Mujer" name="rdoGender" control={<Radio />} label="Mujer" />
                                        <FormControlLabel value="Hombre" name="rdoGender" control={<Radio />} label="Hombre" />
                                    </RadioGroup>
                                </FormControl>
                                <FormControl component="fieldset" required>
                                    <FormLabel component="rdoPosicion">POSICIÓN</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-label="gender"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="Estudiante" name="rdoPosicion" control={<Radio />} label="Estudiante" />
                                        <FormControlLabel value="Staff" name="rdoPosicion" control={<Radio />} label="Staff" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    name="txtFotografia"
                                    label="Fotografía"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 2, mb: 2 }}
                        >
                            Guardar
                        </Button>
                    </Box>
                </Box>

            </Grid>
    )
}


export default Form;