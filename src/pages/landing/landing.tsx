import React, { useEffect, useState } from "react";
import classes from "./landing.module.css"
import adImg1 from "../../assets/pageImages/NewsPic1.jpg"
import adImg2 from "../../assets/pageImages/NewsPic2.jpg"
import adImg3 from "../../assets/pageImages/NewsPic3.jpg"
import csocso from "../../assets/landingpage/csocso.png"
import darts from "../../assets/landingpage/darts.png"
import palinkak from "../../assets/landingpage/palinkak.png"
import piaKeszlet from "../../assets/landingpage/piaKeszlet.png"
import norelaxsignature from "../../assets/pageImages/NoRelaxignature.png"
import { useTranslation } from "react-i18next";
import cornerImg from "../../assets/pageImages/CornerCut.png"
import cornerImgLeftBottom from "../../assets/pageImages/DownLeftCorner2.png";
import { Dialog, DialogContent, DialogContentText } from "@mui/material";


function Landing(){
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [adStage, setAdStage] = useState<number>(0) 
    const images : string[] = [adImg1, adImg2, adImg3]
    const [clicked, setClicked] = useState<boolean>(false)
    const norelaxImages : string[] = [csocso, darts, palinkak, piaKeszlet]
    const [index, setIndex] = useState<number>(0)
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
    
    function imgPopUpHandler(imgId: number){
        setIndex(imgId)
        setSuccess(true);
    }


    return(
        
        <>
       
        <div className={classes["landing-page-div"]}>
        
            
            {!loading ?
                    <div className={classes["landin_page_container"]}>
                        <div  >
                            <h3> 
                                {t("landing.adText")}
                            </h3>
                        </div >
                        <div className={classes["img_container"]}>
                            <div className={classes["prev_ad_buttons_div"]}>
                                <button onClick={() => {setAdStage((prevStage) => Math.max(prevStage - 1, 0)); setClicked(true)} } className={classes["prev_ad_buttons"]}></button>
                            </div>
                            <img className={classes.adImg} src={images[adStage]} alt="" />
                           
                            <div className={classes["next_ad_buttons_div"]}>
                                <button  onClick={() => {setAdStage((prevStage) => Math.min(prevStage + 1, images.length - 1)); setClicked(true)} } className={classes["next_ad_buttons"]}></button>
                            </div>
                        </div>
                        <div className={classes["stage_markers_container"]}>
                            <div style={adStage == 0 ? {backgroundColor:"white"}: {backgroundColor:"gray"}} className={classes["stage_marker"]}></div>
                            <div style={adStage == 1 ? {backgroundColor:"white"}: {backgroundColor:"gray"}} className={classes["stage_marker"]}></div>
                            <div style={adStage == 2 ? {backgroundColor:"white"}: {backgroundColor:"gray"}} className={classes["stage_marker"]}></div>
                        </div>
                        
                        <div className={classes["ad_text_container"]}>
                            <div  >
                                <h4> 
                                    Rólunk
                                </h4>
                            </div >
                            <span><img className={classes["corner_img1"]} src={cornerImgLeftBottom} alt="" /></span>
                            <span><img className={classes["corner_img2"]} src={cornerImg} alt="" /></span>
                            <span><img className={classes["corner_img3"]} src={cornerImg} alt="" /></span>
                            <span><img className={classes["corner_img4"]} src={cornerImg} alt="" /></span>
                            <div className={classes["ad_text_div"]}>
                               
                                <div className={classes["ad_text"]}>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusamus et </p>
                                    <p>laborum harum ipsum excepturi mollitia voluptate eaque aliquam deserunt exercitationem animi nobis, beatae maiores voluptatem ipsa amet? Perferendis, eveniet?</p>
                                </div>
                                <div className={classes["ad_text"]}>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusamus et </p>
                                    <p>laborum harum ipsum excepturi mollitia voluptate eaque aliquam deserunt exercitationem animi nobis, beatae maiores voluptatem ipsa amet? Perferendis, eveniet?</p>
                                </div>
                            </div>
                            <div className={classes["norelax_img_container"]}>
                                    <div>
                                        <img onClick={() => imgPopUpHandler(0)} className={classes["landing_img"]} src={csocso} alt="" />
                                    </div>
                                    <div> 
                                        <img onClick={() => imgPopUpHandler(1)} className={classes["landing_img"]} src={darts} alt="" />
                                    </div>
                                    <div>
                                        <img onClick={() => imgPopUpHandler(2)} className={classes["landing_img"]} src={palinkak} alt="" />
                                    </div>
                                    <div>
                                        <img onClick={() => imgPopUpHandler(3)} className={classes["landing_img"]} src={piaKeszlet} alt="" />
                                    </div>
                            </div>
                            <div>
                                <div>
                                    <img style={{width:"150px"}} src={norelaxsignature} alt=""  />
                                </div>
                            </div>
                        </div>
                        <React.Fragment>
                            <Dialog style={{paddingRight:0}} open={success} onClose={() => setSuccess(false)}>
                                <DialogContent style={{backgroundColor:"black", border:"2px solid white"}}>
                                    <DialogContentText style={{width:"100%", maxWidth:'500px', height:"100%", maxHeight:"800px"}}>
                                        <img style={{width:"100%", maxWidth:'500px', height:"100%", maxHeight:"800px"}} src={norelaxImages[index]} alt="" />
                                    </DialogContentText>
                                </DialogContent>
                            </Dialog>
                        </React.Fragment>
                       
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