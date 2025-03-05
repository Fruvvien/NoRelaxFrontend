import classes from './aboutUs.module.css';
import { useTranslation } from 'react-i18next';
import cornerImg from "../../assets/pageImages/OtherCorners.png"
import cornerImgLeftBottom from "../../assets/pageImages/DownLeftCorner.png";


export default function AboutUs() {
    const {t} = useTranslation();
    return(
        <>
            <div className={classes["aboutUs-page"]}>
                <div className={classes.background}>
                    <span><img className={classes["corner_img1"]} src={cornerImgLeftBottom} alt="" /></span>
                    <span><img className={classes["corner_img2"]} src={cornerImg} alt="" /></span>
                    <span><img className={classes["corner_img3"]} src={cornerImg} alt="" /></span>
                    <span><img className={classes["corner_img4"]} src={cornerImg} alt="" /></span>
                    <h1>{t('aboutUs.title')}</h1>
                    <br />
                    <p>{t('aboutUs.text')}</p>

                </div>
            </div>
        </>
    )
}