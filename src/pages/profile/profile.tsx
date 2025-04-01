import { useTranslation } from "react-i18next"
import classes from "./profile.module.css"
import img from "../../assets/NoRelaxLogo.png"
import { useEffect, useState } from "react"
import { HttpClientRequests } from "../../services/http-client-requests"
import { IGetUser } from "../../models/IgetUser"

export default function Profile(){
    const [user, setUser] = useState<IGetUser>()
    const {t} = useTranslation()
    useEffect(() =>{
        getUserDatas()
    }, [])

    async function getUserDatas(){
        const userId = localStorage.getItem("userId")?.toString()
        const response = await HttpClientRequests.getUser("user", userId)
        setUser(response)
    }

    async function getReservationDatas(){

    }

    return(
        <>
        <div className={classes["profile_page"]}>
            <div className={classes.container1}>
                <div className={classes["profile_header"]}>
                    <div>

                        <h1>{t("profile.profileTitle")}</h1>
                    </div>
                    <div>
                        <div>
                        <a className={classes["profile_delete_link"]} href="">{t("profile.profileDelete")}</a>
                        </div>
                   
                    </div>

                </div>
                <div className={classes["profile_body"]}>
                    <div className={classes["profile_img_div"]}>
                        <div>
                            <img src={img} alt="" className={classes["profile_avatar"]} />
                        </div>
                        <div>
                            <a className={classes["profile_img_upload_link"]}  href="">{t("profile.profileImgUploadText")}</a>
                        </div>
                    </div>
                    <div className={classes["profile_user_datas"]}>
                        <div>
                            <p>{t("profile.profileName")} {user?.firstName} {user?.lastName}</p>
                        </div>
                        <div>
                            <p>{t("profile.profileEmail")} {user?.email}</p>
                        </div>
                        <div>
                            <p>{t("profile.profilePhoneNumber")} {user?.phoneNumber}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.container2}>
                <div className={classes["reservation_header"]}>
                    <h1>{t("profile.reservationTitle")}</h1>
                </div>
            </div>
        </div>
        </>
    )
}