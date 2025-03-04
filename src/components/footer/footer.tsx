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
import { footer } from "framer-motion/client";

function Footer () {
const {t} = useTranslation();

    return (
      <section className={classes.footer}>
        <hr className={classes["footer-seperator"]} />
        
        <section className={classes["footer-info"]}>
          <section className={classes["footer-info-left"]}>
            <div className={classes["footer-info__information"]}>
                <h2>{t("footer.information")}</h2>
            </div>
          
                <section className={classes["footer-info__icons"]}>
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
                <h2>{t("footer.socials")}</h2>
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
        <hr className={classes["footer-seperator"]} />
      </section>
    )
  
  }
  
  export default Footer;