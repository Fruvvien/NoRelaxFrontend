import React, { useEffect, useState } from "react";
import classes from "./landing.module.css"
import adImg1 from "../../assets/pageImages/NewsPic1.jpg"
import adImg2 from "../../assets/pageImages/NewsPic2.jpg"
import adImg3 from "../../assets/pageImages/NewsPic3.jpg"
import { useTranslation } from "react-i18next";
import { i } from "framer-motion/client";


function Landing(){
    const [loading, setLoading] = useState<boolean>(true);
    const [adStage, setAdStage] = useState<number>(0) 
    const images : string[] = [adImg1, adImg2, adImg3]
    const [clicked, setClicked] = useState<boolean>(false)
    const {t} = useTranslation()

   
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);


    useEffect(() => {
    if (!clicked) {
        const timeout = setTimeout(() => {
            setAdStage((prevAdStage) =>
                prevAdStage < images.length - 1 ? prevAdStage + 1 : 0
            );
        }, 4000);
        return () => clearTimeout(timeout);
    }
    }, [adStage, clicked, images.length]);


    useEffect(() => {
        if (clicked) {
            const timeout = setTimeout(() => {
                setClicked(false);
            }, 4000);
            return () => clearTimeout(timeout);
        }
    }, [clicked]);
    
    


    return(
        
        <>
       
        <div className={classes["landing-page-div"]}>
        
            
            {!loading ?
                    <div className={classes["landin_page_container"]}>
                        <div className={classes["img_container"]}>
                            <div className={classes["prev_ad_buttons_div"]}>
                                <button onClick={() => {setAdStage((prevStage) => Math.max(prevStage - 1, 0)), setClicked(true)} } className={classes["prev_ad_buttons"]}></button>
                            </div>
                            <img className={classes.adImg} src={images[adStage]} alt="" />
                           
                            <div className={classes["next_ad_buttons_div"]}>
                                <button  onClick={() => {setAdStage((prevStage) => Math.min(prevStage + 1, images.length - 1)), setClicked(true)} } className={classes["next_ad_buttons"]}></button>
                            </div>
                        </div>
                        <div className={classes["stage_markers_container"]}>
                            <div style={adStage == 0 ? {backgroundColor:"white"}: {backgroundColor:"gray"}} className={classes["stage_marker"]}></div>
                            <div style={adStage == 1 ? {backgroundColor:"white"}: {backgroundColor:"gray"}} className={classes["stage_marker"]}></div>
                            <div style={adStage == 2 ? {backgroundColor:"white"}: {backgroundColor:"gray"}} className={classes["stage_marker"]}></div>
                        </div>
                        <div className={classes["ad_text_container"]}>
                            <div className={classes["ad_text"]}>
                                <p> 
                                    {t("landing.adText")}
                                </p>
                            </div >
                            <div className={classes["ad_text"]}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusamus et </p>
                                <p>laborum harum ipsum excepturi mollitia voluptate eaque aliquam deserunt exercitationem animi nobis, beatae maiores voluptatem ipsa amet? Perferendis, eveniet?</p>
                            </div>
                            <div className={classes["ad_text"]}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusamus et </p>
                                <p>laborum harum ipsum excepturi mollitia voluptate eaque aliquam deserunt exercitationem animi nobis, beatae maiores voluptatem ipsa amet? Perferendis, eveniet?</p>
                            </div>
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