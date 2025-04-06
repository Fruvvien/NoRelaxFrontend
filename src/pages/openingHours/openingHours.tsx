import classes from './openingHours.module.css';
import cornerImg from "../../assets/pageImages/CornerCut.png"
import cornerImgLeftBottom from "../../assets/pageImages/DownLeftCorner.png";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';



export default function OpeningHours() {
    const [loading, setLoading] = useState<boolean>(true);
    setTimeout(() =>{
        setLoading(false);
    }, 1000)
    const {t} = useTranslation();
    return(
        <>
            <div className={classes["opening-hours-page"]}>
            {!loading ?
                <div className={classes.background}>
                <span><img className={classes["corner_img1"]} src={cornerImgLeftBottom} alt="" /></span>
                            <span><img className={classes["corner_img2"]} src={cornerImg} alt="" /></span>
                            <span><img className={classes["corner_img3"]} src={cornerImg} alt="" /></span>
                            <span><img className={classes["corner_img4"]} src={cornerImg} alt="" /></span>
                            <div className={classes["opening-hours-title-container"]}>
                                <h1>{t('openingHours.title')}</h1>
                            </div>
                            <div className={classes["opening-hours-data-container"]}>
                                <p>{t('openingHours.monday')}</p>
                                <p>{t('openingHours.tuesday')}</p>
                                <p>{t('openingHours.wednesday')}</p>
                                <p>{t('openingHours.thursday')}</p>
                                <p>{t('openingHours.friday')}</p>
                                <p>{t('openingHours.saturday')}</p>
                                <p>{t('openingHours.sunday')}</p>
                            </div>

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
        </>
    )
}