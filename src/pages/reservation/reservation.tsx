import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import classes from "./reservation.module.css"
import ButtonInput from "../../components/buttons/buttonInput";
import  {HttpClientRequests}  from "../../services/http-client-requests";
import 'react-calendar/dist/Calendar.css';

import Calendar from 'react-calendar';
import { IReservation } from "../../models/reservation";
import { useNavigate } from "react-router-dom";
import CustomDialog from "../../components/dialog/dialog";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Reservation(){
    const {t,i18n} = useTranslation();
    const [stage, setStage] = useState(0);
    const reservationTitle:string[] = [t("reservation.tableTitleOne"),t("reservation.tableTitleTwo"),t("reservation.tableTitleThree")];
    const [locale, setLocale] = useState('hu-HU');
    const [reservation, setReservation] = useState<IReservation[]>([])
    const [success, setSuccess] = useState(false);
    const [date, onChange] = useState<Date | null>(new Date());
    const [tableNumber, setableNumber] = useState<number | undefined>(0);
    const [time, setTime] = useState<string>()
    const [dateTime, setDateTime] = useState<Date | null>(null);
    const [seats, setSeats] = useState<number | undefined>(0);
    const navigate = useNavigate();
    const [error, setError] = useState<string>("");
    const [currentDate, setCurrentDate] = useState<Date>(new Date())
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() =>{
        getReservations();
        setCurrentDate(new Date())
        const currentLanguage = i18n.language
        if(currentLanguage === "HU"){
            setLocale('hu-HU')
        }
        else if(currentLanguage === "EN"){
            setLocale('en-US')
        }
        
    }, [i18n.language])

    setTimeout(() =>{
        setLoading(false);
    }, 1000)

    useEffect(() => {
        if (date && time) {
            const [hours, minutes] = time.split(":").map(Number); 
            const newDateTime = new Date(date);
            
            newDateTime.setHours(hours, minutes, 0, 0); 
            setDateTime(newDateTime);
            
        }
    }, [date, time]);

    function checkDate(tableNumber: number){
        
        return reservation.find((reserve) => {
            if(tableNumber === reserve.tableNumber){
                const parseDateTime = reserve.reservationDate ? new Date(reserve.reservationDate) : null;
                if (reserve.isReserved && parseDateTime!.getFullYear() === date!.getFullYear() &&  parseDateTime!.getMonth() === date!.getMonth() && parseDateTime!.getDay() === date!.getDay()) {
                    return true
                }
            }
           
            return false;
            
        });
      
    }

    function stageChane(stageNumber: number){
        setStage(stageNumber)
    }

    function tableChoose(stageNumber: number, tableSeats: number | undefined, seats: number |undefined){
        setableNumber(tableSeats);
        setStage(stageNumber);
        setSeats(seats);
    }
    async function submitReservation(){
        if(tableNumber !== 0 ){
        const userId: string | null = localStorage.getItem("userId");
        const newDateTime = new Date(dateTime!.getTime() + 2 * 60 * 60 * 1000)

        
            const data: IReservation = {
                userId,
                isReserved: true, 
                reservationDate: newDateTime?.toISOString(),
                tableNumber: tableNumber,
                seats: seats
            }
            const response = await HttpClientRequests.postReservation("reservation", data);
            if(response){
                setSuccess(true);
                setTimeout(() => {
                    navigate("/home");
                }, 2000)
            }
            else{
                console.log(response);
            }
        }
        else{
            setError(t("reservation.badRequest"))
            console.log(error);
        }
        
        
        
        
        
        
    }

    async function getReservations(){
        const response =  await HttpClientRequests.getReservation("reservation")
        setReservation(response);
    }



    return(
        <>
       
        <div className={classes["reservation_page"]}>
        {!loading ?
            <>
            <div className={classes["reservation_container"]}>
                        <div className={classes["reservation_header"]}>
                            <div>
                                <h1>{reservationTitle[stage]}</h1>
                            </div>
                        </div>
                        <div className={classes["reservation_body"]}>
                            {stage === 0 ?
                                <>
                                    <div className={classes["reservation_calendar_body"]}>
                                        <div>
                                            <Calendar

                                                className={classes["react-calendar"]}
                                                onChange={(value) => onChange(value as Date)}
                                                value={date}
                                                locale={locale}
                                                formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: 'short' })}
                                                formatMonth={(locale, date) => date.toLocaleDateString(locale, { month: 'long' })} />
                                        </div>
                                        <div>
                                            <ButtonInput onClick={() => { setStage(1); } } type="button" buttonText={t("reservation.buttonNext")}></ButtonInput>
                                        </div>
                                    </div>


                                </>
                                :
                                ""}
                            {stage === 1 ?
                                <>
                                    {currentDate.getFullYear() <= date!.getFullYear() && currentDate.getMonth() <= date!.getMonth() && currentDate.getDay() <= date!.getDay() ?

                                        (
                                            <>
                                                {!checkDate(1) ?
                                                    <button onClick={() => { tableChoose(2, 1, 4); } } className={classes["reservation_table"]}>
                                                        <span style={{ backgroundColor: "green" }} className={classes["reservation_table_text"]}>{t("reservation.tableTextOne")} </span>
                                                    </button>
                                                    :

                                                    <button disabled className={classes["reserved_table"]}>
                                                        <span style={{ backgroundColor: "red" }} className={classes["reservation_table_text"]}>{t("reservation.tableTextOne")}</span>
                                                    </button>}

                                                {!checkDate(2) ?
                                                    <button onClick={() => { tableChoose(2, 2, 4); } } className={classes["reservation_table"]}>
                                                        <span style={{ backgroundColor: "green" }} className={classes["reservation_table_text"]}>{t("reservation.tableTextTwo")} </span>
                                                    </button>
                                                    :

                                                    <button disabled className={classes["reserved_table"]}>
                                                        <span style={{ backgroundColor: "red" }} className={classes["reservation_table_text"]}>{t("reservation.tableTextTwo")}</span>
                                                    </button>}


                                                {!checkDate(3) ?
                                                    <button onClick={() => { tableChoose(2, 3, 5); } } className={classes["reservation_table"]}>
                                                        <span style={{ backgroundColor: "green" }} className={classes["reservation_table_text"]}>{t("reservation.tableTextThree")} </span>
                                                    </button>
                                                    :

                                                    <button disabled className={classes["reserved_table"]}>
                                                        <span style={{ backgroundColor: "red" }} className={classes["reservation_table_text"]}>{t("reservation.tableTextThree")}</span>
                                                    </button>}
                                                {!checkDate(4) ?
                                                    <button onClick={() => { tableChoose(2, 4, 6); } } className={classes["reservation_table"]}>
                                                        <span style={{ backgroundColor: "green" }} className={classes["reservation_table_text"]}>{t("reservation.tableTextFour")} </span>
                                                    </button>
                                                    :

                                                    <button disabled className={classes["reserved_table"]}>
                                                        <span style={{ backgroundColor: "red" }} className={classes["reservation_table_text"]}>{t("reservation.tableTextFour")}</span>
                                                    </button>}

                                                {!checkDate(5) ?
                                                    <button onClick={() => { tableChoose(2, 5, 8); } } className={classes["reservation_table"]}>
                                                        <span style={{ backgroundColor: "green" }} className={classes["reservation_table_text"]}>{t("reservation.tableTextFive")} </span>
                                                    </button>
                                                    :

                                                    <button disabled className={classes["reserved_table"]}>
                                                        <span style={{ backgroundColor: "red" }} className={classes["reservation_table_text"]}>{t("reservation.tableTextFive")}</span>
                                                    </button>}
                                            </>
                                        )
                                        :
                                        <>
                                            <p style={{ color: "white" }}>{t("reservation.badDateTime")}</p>
                                        </>}
                                </>

                                :
                                ""}
                            {stage === 2 ?
                                <div className={classes["reservation_time"]}>
                                    <div className={classes["reservation_rules_text"]}>
                                        <div>
                                            <h3>{t("reservation.ruleTitle")}</h3>
                                        </div>
                                        <div>
                                            <span>
                                                {t("reservation.ruleOne")}
                                            </span>
                                        </div>
                                        <div>
                                            <span>
                                                {t("reservation.ruleTwo")}
                                            </span>
                                        </div>
                                        <div>
                                            <span>
                                                {t("reservation.ruleThree")}
                                            </span>
                                        </div>
                                        <div>
                                            <span>
                                                {t("reservation.ruleFour")}
                                            </span>
                                        </div>
                                    </div>
                                    {error.length > 0 ? <p style={{ color: "red" }}>{error}</p> : ""}
                                    <div className={classes["reservation_time_select"]}>
                                        <select onChange={(item) => { setTime(item.target.value); } } className={classes["reservation_select"]}>
                                            <option value="18:00">18:00</option>
                                            <option value="18:30">18:30</option>
                                            <option value="19:00">19:00</option>
                                            <option value="19:30">19:30</option>
                                            <option value="20:00">20:00</option>
                                            <option value="20:30">20:30</option>
                                            <option value="21:00">21:00</option>
                                            <option value="21:30">21:30</option>
                                        </select>

                                    </div>
                                    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                        <ButtonInput onClick={() => { submitReservation(); } } type="button" buttonText={t("reservation.submitReservation")}></ButtonInput>
                                    </div>
                                </div>
                                :
                                ""}



                        </div>
                        <div className={classes["reservation_footer"]}>
                            {stage === 0 ? <button className={classes["reservation_footer_text"]} style={{ backgroundColor: "gray", cursor: "default" }} disabled>
                                <span>{t("reservation.stageTwo")}</span>
                            </button>
                                :
                                <button onClick={() => stageChane(0)} className={classes["reservation_footer_text"]}>
                                    <span>{t("reservation.stageTwo")}</span>
                                </button>}
                            {stage === 1 ? <button className={classes["reservation_footer_text"]} style={{ backgroundColor: "gray", cursor: "default" }} disabled>
                                <span>{t("reservation.stageOne")}</span>
                            </button>
                                :
                                <button onClick={() => stageChane(1)} className={classes["reservation_footer_text"]}>
                                    <span>{t("reservation.stageOne")}</span>
                                </button>}


                            {stage === 2 ? <button className={classes["reservation_footer_text"]} style={{ backgroundColor: "gray", cursor: "default" }} disabled>
                                <span>{t("reservation.stageThree")}</span>
                            </button>
                                :
                                <button onClick={() => stageChane(2)} className={classes["reservation_footer_text"]}>
                                    <span>{t("reservation.stageThree")}</span>
                                </button>}


                        </div>
                    </div>
                        <>
                            <CustomDialog text={t("reservation.successReservation")} open={success}></CustomDialog>
                        </>
                        
                    </>
                :
            <div className={classes["loading_div"]}>
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