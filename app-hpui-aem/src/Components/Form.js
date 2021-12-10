import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

function Form() {
    return (
        <Box component="form"
            sx={{
                width: 450,
                height: 400,
                backgroundColor: 'white',
            }}
            noValidate
            autoComplete="off"
            
        >
            <h2>Agregar un peronaje</h2>
            <div>
                <div>
                    <TextField
                        required
                        label="NOMBRE"
                        variant="standard"
                        defaultValue=""  
                    />
                    <TextField
                        label="CUMPLEAÑOS"
                        variant="standard"
                        defaultValue=""  
                    />
                    <TextField
                        label="COLOR DE OJOS"
                        defaultValue=""                        
                        variant="standard"
                    />
                    <TextField
                        label="COLOR DE PELO"
                        defaultValue=""
                        variant="standard"
                    />
                    <br />
                </div>
                <div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">GENERO</FormLabel>
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                            <FormControlLabel value="Mujer" control={<Radio />} label="Mujer" />
                            <FormControlLabel value="Hombre" control={<Radio />} label="Hombre" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl component="fieldset">
                        <FormLabel component="legend">POSICIÓN</FormLabel>
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                            <FormControlLabel value="Estudiante" control={<Radio />} label="Estudiante" />
                            <FormControlLabel value="Staff" control={<Radio />} label="Staff" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <TextField
                        id="standard-number"
                        label="FOTOGRAFÓA"
                        type="file"
                        variant="standard"
                    />
                </div>
                <br/>
                <div>
                    <Button variant="contained">GUARDAR</Button>
                </div>
            </div>
        </Box>
    )
}


export default Form;