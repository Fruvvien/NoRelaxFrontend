import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function ButtonInput(props: {buttonText: string}) {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained">{props.buttonText}</Button>
        </Stack>
    )

}

export default ButtonInput;