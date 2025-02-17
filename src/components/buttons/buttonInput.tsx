import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import classes from "./buttonInput.module.css"
import { style } from 'framer-motion/client';

function ButtonInput(props: {hoverColor?:string, buttonText: string, style?: "string", type: "button" | "submit" | "reset", onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const inputStyle = {
        backgroundColor: isHovered ? props.hoverColor : 'white', 
    
    };


    return (
        <Stack spacing={2} direction="row">
            <Button 
                style={inputStyle}
                className={classes["background-color"]} 
                variant="contained" 
                onClick={props.onClick} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}  
                type={props.type}>{props.buttonText}
            </Button>
        </Stack>
    )

}

export default ButtonInput;



