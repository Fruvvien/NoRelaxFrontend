import React, { useState } from "react";
import classes from "./landing.module.css"
function Landing(){
    const [loading, setLoading] = useState<boolean>(true);
    setTimeout(() =>{
        setLoading(false);
    }, 1000)

    return(
        
        <>
       
        <div className={classes["landing-page-div"]}>
        
            <div className={classes.container}>
            {!loading ?
                <div>
                    asd
                </div>
                :
                <div className={classes["dots_div"]}>
                    <div className="dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
            }
            </div>
            
        
        </div>
        
        </>

    )
}

export default Landing;