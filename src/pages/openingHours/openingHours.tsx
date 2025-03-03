import classes from './openingHours.module.css';
import cornerImg from "../../assets/pageImages/CornerCut.png"
import cornerImgLeftBottom from "../../assets/pageImages/DownLeftCorner.png";
import { useTranslation } from 'react-i18next';



export default function OpeningHours() {
    const {t} = useTranslation();
    return(
        <>
            <div className={classes["opening-hours-page"]}>
                <div className={classes.background}>
                <span><img className={classes["corner_img1"]} src={cornerImgLeftBottom} alt="" /></span>
                            <span><img className={classes["corner_img2"]} src={cornerImg} alt="" /></span>
                            <span><img className={classes["corner_img3"]} src={cornerImg} alt="" /></span>
                            <span><img className={classes["corner_img4"]} src={cornerImg} alt="" /></span>
                            <h1>{t('openingHours.title')}</h1>

                            <p>{t('openingHours.monday')}</p>
                            <p>{t('openingHours.tuesday')}</p>
                            <p>{t('openingHours.wednesday')}</p>
                            <p>{t('openingHours.thursday')}</p>
                            <p>{t('openingHours.friday')}</p>
                            <p>{t('openingHours.saturday')}</p>
                            <p>{t('openingHours.sunday')}</p>

                </div>
            </div>
        </>
    )
}