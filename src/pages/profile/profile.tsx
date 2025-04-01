import { useTranslation } from "react-i18next"
import classes from "./profile.module.css"
import img from "../../assets/NoRelaxLogo.png"

export default function Profile(){
    const {t} = useTranslation()

    return(
        <>
        <div className={classes["profile_page"]}>
            <div className={classes.container1}>
                <div className={classes["profile_header"]}>
                    <h1>{t("profile.profileTitle")}</h1>
                </div>
                <div className={classes["profile_body"]}>
                    <div>
                        <div>
                            
                        </div>
                        <img src={img} alt="" className={classes["profile_avatar"]} />
                        <a href="">{t("profile.profileImgUploadText")}</a>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className={classes.container2}>

            </div>
        </div>
        </>
    )
}