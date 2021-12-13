import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { helperHttp } from '../../Helpers/helperHttp';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Cancel from '@mui/icons-material/Cancel';

const BootstrapButton = styled(Button)({
    fontWeight: "lighter",
    fontSize: 16,
    padding: '6px 12px',
    width: 200,
    height: 50,
    borderRadius: 0,
    backgroundColor: '#727272',
    borderBlockColor: '#8350AB',
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
    },
});

function Formulario() {

    const [db, setDB] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const theme = createTheme();
    let api = helperHttp();

    //USAR URL PARA PRUEBAS EN AMBIENTE LOCAL
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

        //PARA LA PUESTAS EN AMBIENTE LOCAL DESCOMENTAR ESTA SECCIÓN
        /* api.post(url, options).then((res) => {
            if (!res.err) {
                setDB([...db, res]);
            } else {
                setError(res);
            }
        }); */

        alert("No es posible guardar los datos por el momento.")
    };

    const closeModal = () =>{
        
    }

    return (
        <Box mt={3}
            sx={{
                position: 'absolute',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                boxShadow: 5,
                p: 4,
                borderRadius: 2
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Stack direction="row" spacing={12} alignItems="flex-end" mt={1} >
                    <Typography component="div" variant="h5">
                        AGREGAR PERSONAJES
                    </Typography>
                    <IconButton color="inherit" component="span" >
                        <Cancel onClick={closeModal}/>
                    </IconButton>
                </Stack>
            </Box>
            <Box component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '23ch' },
                }}
                noValidate={false}
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <Grid container spacing={2} >
                    <Grid item xs={4} sm={6}>
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
                    <Grid item lg={4} sm={6}>
                        <TextField
                            maxRows={4}
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
                    <Grid item xs={4} sm={6}>
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
                    <Grid item xs={4} sm={6}>
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
                            variant="filled"
                            sx={{ m: 1, width: '60ch' }}
                            helperText="Agregar el link de la imagen."
                        />
                    </Grid>
                </Grid>
                <BootstrapButton 
                    type="submit" 
                    variant="contained"  
                    sx={{
                        m: 3, width: '40ch'
                    }}
                    >
                    GUARDAR
                </BootstrapButton>
            </Box>
        </Box>
    );
}

export default Formulario;