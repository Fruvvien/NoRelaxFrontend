import React, { useState } from "react";
import classes from "./landing.module.css"
import adImg1 from "../../assets/pageImages/NewsPic1.jpg"
import adImg2 from "../../assets/pageImages/NewsPic2.jpg"
import adImg3 from "../../assets/pageImages/NewsPic3.jpg"


function Landing(){
    const [loading, setLoading] = useState<boolean>(true);
    const [adStage, setAdStage] = useState<number>(0) 
    const images : string[] = [adImg1, adImg2, adImg3]

    setTimeout(() =>{
        setLoading(false);
    }, 1000)

    return(
        
        <>
       
        <div className={classes["landing-page-div"]}>
        
            
            {!loading ?
                    <div className={classes["landin_page_container"]}>
                        <div className={classes["img_container"]}>
                            <div className={classes["prev_ad_buttons_div"]}>
                                <button onClick={() => setAdStage((prevStage) => Math.max(prevStage - 1, 0)) } className={classes["prev_ad_buttons"]}></button>
                            </div>
                            <img className={classes.adImg} src={images[adStage]} alt="" />
                            <div className={classes["next_ad_buttons_div"]}>
                                <button  onClick={() => setAdStage((prevStage) => Math.min(prevStage + 1, images.length - 1)) } className={classes["next_ad_buttons"]}></button>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                       
                    </div>
                :
                <div className={classes.container}>
                    <div className={classes["dots_div"]}>
                        <div className="dots">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                </div>
            }
            
        
        </div>
        
        </>

    )
}

export default Landing;