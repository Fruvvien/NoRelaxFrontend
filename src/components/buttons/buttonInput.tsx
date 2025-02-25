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
        color:"black",
        fontFamily: "Pirata One,serif",
        fontWeight: 400,
        fontStyle: "normal",
        
    };


    return (
        <Stack spacing={2} direction="row"   className={classes["background-color"]} >
            <Button 
                style={inputStyle}
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



