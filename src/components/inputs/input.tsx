import React from 'react';
import './input.css';
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
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        >
        <TextField id="outlined-basic"  label={labelText} variant="outlined" style={style}  type={type} name={name} onChange={onChange}/>
        </Box>
    )

}

export default Input;