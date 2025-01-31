import React from 'react';
import './input.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Input(props: {labelName: string, type: string, style: React.CSSProperties | undefined }) {
    return (
        <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        >
        <TextField id="outlined-basic" label={props.labelName} variant="outlined" style={props.style}  type={props.type}/>
        </Box>
    )

}

export default Input;