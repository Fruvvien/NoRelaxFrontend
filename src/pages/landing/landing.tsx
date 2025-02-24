import React from "react";
import ButtonInput from "../../components/buttons/buttonInput";
import { useNavigate } from 'react-router-dom';
import classes from "./landing.module.css"

function Landing(){
    const navigate = useNavigate();

    
    return(
        <>
        <div className={classes["landing-page-div"]}>
            <p>asd</p>
          
        </div>
      
        </>

    )
}

export default Landing;