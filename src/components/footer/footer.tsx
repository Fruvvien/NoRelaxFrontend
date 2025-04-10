import React from "react";
import "./footer.module.css";
import { useTranslation } from "react-i18next";
import imgfacebook from "../../assets/footerImages/facebook_logo.png";
import imginstagram from "../../assets/footerImages/instagram_logo.png";
import imgtiktok from "../../assets/footerImages/tiktok_logo.png";
import classes from "./footer.module.css";
import norelaxlogo from "../../assets/NoRelaxLogo.png";    
import locationIcon from "../../assets/footerImages/locationIcon.png";
import phoneIcon from "../../assets/footerImages/phoneIcon.png";
import emailIcon from "../../assets/footerImages/emailIcon.png";
/* import cornerImg from "../../assets/pageImages/OtherCorners.png";
import cornerImgLeftBottom from "../../assets/pageImages/DownLeftCorner.png"; */

function Footer () {
const {t} = useTranslation();


    return(
        <div className={classes.footer}>
            
            <div className={classes["footer-left-side"]}>
                <div className={classes["footer-info-title"]}>
                    <h3>{t("footer.information")}</h3>
                </div>
                <div className={classes["footer-info-content"]}>
                    <img className={classes["footer-info__icons"]}  src={locationIcon} alt="location" />
                    <span>1183 Balassi Bálint utca 2-10</span>
                </div>
                <div className={classes["footer-info-content"]}>
                    <img className={classes["footer-info__icons"]} src={phoneIcon} alt="phoneNumber" />
                    <span>06 70 368 1515</span>
                </div>
                <div className={classes["footer-info-content"]}>
                    <img className={classes["footer-info__icons"]}  src={emailIcon} alt="email_address" />
                    <span className={classes["footer-email-span"]}>norelaxpub@gmail.com</span>
                </div>
            </div>
            <div className={classes["footer-center-side"]}>
                <div>
                    <img className={classes["footer-logo"]} src={norelaxlogo} alt="norelax" />
                </div>
            </div>
            <div className={classes["footer-right-side"]}>
                <div className={classes["footer-info-title"]}>
                    <h3 >{t("footer.socials")}</h3>
                </div>
                <div className={classes["footer-info-content"]}>
                    <img style={{height:"20px", width:"15px", paddingRight:"5px"}} className={classes["footer-info__icons"]} src={imgfacebook} alt="facebook" />
                    <span>NoRelax</span>
                </div>
                <div className={classes["footer-info-content"]}>
                    <img className={classes["footer-info__icons"]} src={imginstagram} alt="instagram" />
                    <span>norelax_pub</span>
                </div>
                <div className={classes["footer-info-content"]}>
                    <img className={classes["footer-info__icons"]} src={imgtiktok} alt="tiktok" />
                    <span>norelax_pub</span>
                </div>
            </div>
        </div>
    )
    
    /* return (
      <section className={classes.footer}>
         
        <hr className={classes["footer-seperator-top"]} />
        
        <section className={classes["footer-info"]}>
        <span><img className={classes["corner_img1"]} src={cornerImgLeftBottom} alt="" /></span>
        <span><img className={classes["corner_img2"]} src={cornerImg} alt="" /></span>
          <section className={classes["footer-info-left"]}>
                <section className={classes["footer-info__icons"]}>
                    <div className={classes["footer-info__information"]}>
                        <h2>{t("footer.information")}</h2>
                    </div>
                    <div>
                        <div className={classes["footer-info-content-address"]}>
                            <img src={locationIcon} alt="location" />
                            <p>1183 Balassi Bálint utca 2-10</p>
                        </div>
                    </div>
                    <div>
                        <div className={classes["footer-info-content-phone"]}>
                            <img src={phoneIcon} alt="phoneNumber" />
                            <p>06 70 368 1515</p>
                        </div>
                    </div>
                    <div>
                        <div className={classes["footer-info-content-email"]}>
                            <img src={emailIcon} alt="email_address" />
                            <p>norelaxpub@gmail.com</p>
                        </div>
                    </div>
                    
                    
                    
                </section>
          </section>
          <section className={classes["footer-info-center"]}>
            <section>
                <img className={classes["footer-logo"]} src={norelaxlogo} alt="norelax" />
            </section>
          </section>
          <section className={classes["footer-info-right"]}>
            <section className={classes["footer-info__social-media"]}>
                <div className={classes["footer-info__information"]}>
                    <h2>{t("footer.socials")}</h2>
                </div>
                <section className={classes["footer-info__social-media__icons"]}>
                    <div>
                        <div className={classes["footer-social-content-facebook"]}>
                            <img src={imgfacebook} alt="facebook" />
                            <p>NoRelax</p>
                        </div>
                    </div>
                    <div>
                        <div className={classes["footer-social-content-instagram"]}>
                            <img src={imginstagram} alt="instagram" />
                            <p>norelax_pub</p>
                        </div>
                    </div>
                    <div>
                        <div className={classes["footer-social-content-tiktok"]}>
                            <img src={imgtiktok} alt="tiktok" />
                            <p>norelax_pub</p>
                        </div>
                    </div>
                    
                    
                    
                </section>
            </section>
          </section>
        </section>
        <hr className={classes["footer-seperator-bottom"]} />
      </section>
    ) */
  
  }
  
  export default Footer;