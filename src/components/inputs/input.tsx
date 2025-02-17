import React from 'react';
import classes from './input.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type Input = {
    labelText: string; 
    type: string; 
    style?: React.CSSProperties;
    name: string; 
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string | number | "";
    
}

const Input: React.FC<Input> = ({labelText, type, style, name, onChange}) =>{
    
    return (
        <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '30ch', color:"white" } }}
        noValidate
        autoComplete="on"
        className={classes.container}
        >
            <TextField   
                className={classes.inputBackground} 
                id="outlined-basic"  
                label={labelText} 
                variant="filled" 
                style={style}  
                type={type} 
                name={name} 
                onChange={onChange}
                />
        </Box>
    )

}

export default Input;