import React from "react";
import "./footer.module.css";
import { useTranslation } from "react-i18next";
import imgfacebook from "../../assets/footerImages/facebook_logo.png";
import imginstagram from "../../assets/footerImages/instagram_logo.png";
import imgtiktok from "../../assets/footerImages/tiktok_logo.png";
import classes from "./footer.module.css";

function Footer() {
    const {t} = useTranslation();
    return (
        <section className="footer">
            <hr className="footer-separator"/>
            <section className="footer-information">
                <h2>{t('footer.information')}</h2>
                <section className="footer-information-left">
                    <section className="footer-information-address">
                        <p>1183 Balassi Bálint utca 2-10</p>
                    </section>
                    
                    <p>06 70 368 1515</p>
                    <p>norelaxpub@gmail.com</p>
                    <p>{t('footer.policy')}</p>
                </section>

            </section>
            <hr className="footer-separator"/>    
            <section className="footer-socialMedia">
                <h2>{t('footer.socials')}</h2>
                <section className="footer-socials">
                    <img className={classes["icon"]} src={imgfacebook} alt="" />
                    <a href="https://www.facebook.com/norelax?locale=hu_HU">Facebook</a>
                    <img className={classes["icon"]} src={imginstagram} alt="" />
                    <a href="https://www.facebook.com/norelax?locale=hu_HU">Facebook</a>
                    <img className={classes["icon"]} src={imgtiktok} alt="" />
                    <a href="https://www.facebook.com/norelax?locale=hu_HU">Facebook</a>

                </section>
            </section>
            
        </section>
    )
}

export default Footer;
