import { useTranslation } from "react-i18next"
import classes from "./profile.module.css"
import img from "../../assets/NoRelaxLogo.png"
import { useEffect, useState } from "react"
import { HttpClientRequests } from "../../services/http-client-requests"
import { IGetUser } from "../../models/IgetUser"
import { IReservation } from "../../models/reservation"
import ButtonInput from "../../components/buttons/buttonInput"

export default function Profile(){
    const [user, setUser] = useState<IGetUser>()
    const [reservation, setReservation] = useState<IReservation[]>([])
    const {t} = useTranslation()
    const userId = localStorage.getItem("userId")?.toString()
    const [loading, setLoading] = useState<boolean>(true);
    const [currentDate, setCurrentDate] = useState<Date>(new Date())
    setTimeout(() =>{
        setLoading(false);
    }, 1000)

    useEffect(() =>{
        getUserDatas();
        getReservationDatas();
        reservation.map((reserve) => {
            const reservationDate = new Date(reserve.reservationDate!);
            console.log("reservationDate", reservationDate.getFullYear(), reservationDate.getMonth(), reservationDate.getDate())
            console.log("currentDate", currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
            
            if (reservationDate.getFullYear() <= currentDate.getFullYear() && reservationDate.getMonth() <= currentDate.getMonth() && reservationDate.getDate() < currentDate.getDate()) {
                reservationDelete(reserve.id!)
            }
        })
        
    }, [])

   
    async function getUserDatas(){
        const response = await HttpClientRequests.getUser("user", userId)
        setUser(response)

    }


    async function getReservationDatas(){
        const response = await HttpClientRequests.getReservationWithId("reservation", userId!)
        setReservation(response);
    }   
    async function reservationDelete(reserveId: number){
        const response = await HttpClientRequests.deleteReservation("reservation",reserveId!.toString(), userId!);
        if(response){
            await getReservationDatas()
        }
        
    }
    async function profileDelete(){
        const response  = await HttpClientRequests.deleteProfile("user",userId!);
        if(response){
            localStorage.removeItem("authToken");
            localStorage.removeItem("userId");
            window.location.reload();
        }
    }

    return(
        <>
        <div className={classes["profile_page"]}>
            {!loading ?

            <><div className={classes.container1}>
                        <div className={classes["profile_header"]}>
                            <div>

                                <h1>{t("profile.profileTitle")}</h1>
                            </div>
                            <div>
                                <div className={classes["profile_delete_link"]}>
                                    <ButtonInput type="button" buttonText={t("profile.profileDelete")} onClick={profileDelete}></ButtonInput>
                                </div>

                            </div>

                        </div>
                        <div className={classes["profile_body"]}>
                            <div className={classes["profile_img_div"]}>
                                <div>
                                    <img src={img} alt="" className={classes["profile_avatar"]} />
                                </div>
                            </div>
                            <div className={classes["profile_user_datas"]}>
                                <div>
                                    <p>{t("profile.profileName")} {user?.lastName} {user?.firstName}</p>
                                </div>
                                <div>
                                    <p>{t("profile.profileEmail")} {user?.email}</p>
                                </div>
                                <div>
                                    <p>{t("profile.profilePhoneNumber")} {user?.phoneNumber}</p>
                                </div>
                            </div>
                        </div>
                    </div><div className={classes.container2}>
                            <div>
                                <h1 className={classes["reservation_header"]}>{t("profile.reservationTitle")}</h1>
                            </div>
                            {reservation.length > 0 ?
                                reservation.map((reserve, index) => (
                                    <div className={classes["reservation_body"]}>
                                        <div className={classes["reservation_elements"]} key={reserve.id}>
                                            <div className={classes["reservation_box_title"]}>
                                                <h1 className={classes["reservation_title"]}>
                                                    {t("profile.reservationBoxTitle")} {index + 1}
                                                </h1>
                                                <hr className={classes["reservation_hr"]} style={{ width: "70%" }} />
                                            </div>
                                            <div>
                                                <div className={classes["reservation_top_side"]}>
                                                    <div>
                                                        <span>{t("profile.reservationTableNumber")}</span> <span style={{ fontSize: "40px" }}>{reserve.tableNumber}</span>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            {`${t("profile.reservationDate")}: ${new Date(reserve.reservationDate!).getFullYear()}-${new Date(reserve.reservationDate!).getMonth() + 1}-${new Date(reserve.reservationDate!).getDate()}`}
                                                        </div>
                                                        <div>
                                                            {`${t("profile.reservationArrivalTime")}: ${new Date(reserve.reservationDate!).getHours() - 2}:${new Date(reserve.reservationDate!).getMinutes() == 0 ? `${new Date(reserve.reservationDate!).getMinutes()}0` : new Date(reserve.reservationDate!).getMinutes()}`}
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className={classes["reservation_bottom_side"]}>
                                                    <div>
                                                        <span>{t("profile.reservationTableNumber")}</span><span style={{ fontSize: "40px" }}>{reserve.seats}</span>
                                                    </div>
                                                    <div>
                                                        <ButtonInput onClick={() => reservationDelete(reserve.id!)} type="button" buttonText={t("profile.reservationDelete")}></ButtonInput>
                                                    </div>
                                                </div>
                                                <hr />
                                            </div>

                                        </div>

                                    </div>
                                ))

                                :
                                <div className={classes["reservation_body_empty"]}>
                                    <p>{t("profile.emptyReservation")}</p>
                                </div>}

                        </div></>
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