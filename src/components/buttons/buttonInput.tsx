import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function ButtonInput(props: {buttonText: string, style?: "string", type: "button" | "submit" | "reset", onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void}) {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={props.onClick}  type={props.type}>{props.buttonText}</Button>
        </Stack>
    )

}

export default ButtonInput;



