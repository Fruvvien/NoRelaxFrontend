import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import classes from "./reservation.module.css"
import ButtonInput from "../../components/buttons/buttonInput";
import  {HttpClientRequests}  from "../../services/http-client-requests";

import 'react-calendar/dist/Calendar.css';

import Calendar from 'react-calendar';
import { th } from "framer-motion/client";
import { IReservation } from "../../models/reservation";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Reservation(){
    const {t,i18n} = useTranslation();
    const [stage, setStage] = useState(0);
    const [reservationTitle, setReservationTitle] = useState<string[]>([t("reservation.tableTitleOne"),t("reservation.tableTitleTwo"),t("reservation.tableTitleThree")])
    
    const [locale, setLocale] = useState('hu-HU');
    const [reservation, setReservation] = useState<IReservation[]>([])

    const [date, onChange] = useState<Date | null>(new Date());
    const [seats, setSeats] = useState<number>(0);
    const [time, setTime] = useState<string>()
    const [dateTime, setDateTime] = useState<Date | null>(null);

    useEffect(() =>{
        getReservations();
        
        const currentLanguage = i18n.language
        if(currentLanguage === "HU"){
            setLocale('hu-HU')
        }
        else if(currentLanguage === "EN"){
            setLocale('en-US')
        }
        
    }, [i18n.language])

    useEffect(() => {
        if (date && time) {
            const [hours, minutes] = time.split(":").map(Number); 
        const newDateTime = new Date(date); 
        newDateTime.setHours(hours, minutes, 0, 0); 
        setDateTime(newDateTime);
           
            
        }
    }, [date, time]);

    function stageChane(stageNumber: number){
        setStage(stageNumber)
    }

    function tableChoose(stageNumber: number, tableSeats: number){
        setSeats(tableSeats);
        setStage(stageNumber);
    }
    function submitReservation(){
        console.log(dateTime +" " + seats);
    }

    async function getReservations(){
        const response =  await HttpClientRequests.getReservation("reservation")
        setReservation(response);
        
    }



    return(
        <>
        <div className={classes["reservation_page"]}>
            <div className={classes["reservation_container"]}>
                    <div className={classes["reservation_header"]}>
                        <div>
                            <h1>{reservationTitle[stage]}</h1>
                        </div>
                    </div>
                    <div className={classes["reservation_body"]}>
                        {
                            stage === 0 ?
                            <>
                            <div className={classes["reservation_calendar_body"]}>
                            <div >
                                <Calendar 
                                    
                                    className={
                                    classes["react-calendar"]
                                } 
                                    onChange={(value) => onChange(value as Date)} 
                                    value={date}
                                    locale={locale}
                                    formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: 'short' })}
                                    formatMonth={(locale, date) => date.toLocaleDateString(locale, { month: 'long' })}
                                    />
                                </div>
                                <div>
                                    <ButtonInput onClick={() => {setStage(1)}} type="button" buttonText="Tovább"></ButtonInput>
                                </div>
                            </div>
                            
                                
                            </>
                            :
                            ""
                        }
                        {
                            stage === 1 ?
                            <>
                                <button onClick={() => {tableChoose(2,reservation[0].id) }}  className={classes["reservation_table"]}>
                                    <span style={!reservation[0].isReserved ? {backgroundColor:"green"} : {backgroundColor:"red"}} className={classes["reservation_table_text"]}>{t("reservation.tableTextOne")}</span>
                                </button>
                                <button onClick={() => {tableChoose(2,reservation[1].id)}}  className={classes["reservation_table"]}>
                                    <span style={!reservation[1].isReserved ? {backgroundColor:"green"} : {backgroundColor:"red"}} className={classes["reservation_table_text"]}>{t("reservation.tableTextTwo")}</span>
                                </button>
                                <button onClick={() => {tableChoose(2,reservation[2].id)}}  className={classes["reservation_table"]}>
                                    <span style={!reservation[2].isReserved ? {backgroundColor:"green"} : {backgroundColor:"red"}} className={classes["reservation_table_text"]}>{t("reservation.tableTextThree")}</span>
                                </button>
                                <button onClick={() => {tableChoose(2,reservation[3].id)}}  className={classes["reservation_table"]}>
                                    <span style={!reservation[3].isReserved ? {backgroundColor:"green"} : {backgroundColor:"red"}} className={classes["reservation_table_text"]}>{t("reservation.tableTextFour")}</span>
                                </button>
                                <button onClick={() => {tableChoose(2,reservation[4].id)}}  className={classes["reservation_table"]}>
                                    <span style={!reservation[4].isReserved ? {backgroundColor:"green"} : {backgroundColor:"red"}} className={classes["reservation_table_text"]}>{t("reservation.tableTextFive")}</span>
                                </button>
                            </>
                            :
                            ""
                        }
                                                {
                            stage === 2 ?
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
                                </div>
                                <div className={classes["reservation_time_select"]}>
                                    <select onChange={(item) => {setTime(item.target.value);}} className={classes["reservation_select"]}>
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
                                <div style={{display:"flex", justifyContent:"center",  width:"100%"}}>
                                    <ButtonInput onClick={() => {submitReservation()}} type="button" buttonText={t("reservation.submitReservation")}></ButtonInput>
                                </div>
                            </div>
                            :
                            ""
                        }
                        

                        
                    </div>
                    <div className={classes["reservation_footer"]}>
                        {
                            stage === 0 ? <button  className={classes["reservation_footer_text"]} style={{backgroundColor: "gray", cursor:"default"}} disabled>
                                                <span >{t("reservation.stageTwo")}</span>
                                            </button>
                                            :
                                            <button onClick={() => stageChane(0)} className={classes["reservation_footer_text"]} >
                                                <span >{t("reservation.stageTwo")}</span>
                                            </button>
                        }
                        {
                            stage === 1 ?   <button className={classes["reservation_footer_text"]} style={{backgroundColor: "gray", cursor:"default"}} disabled>
                                                 <span >{t("reservation.stageOne")}</span>
                                            </button>
                                            :
                                            <button onClick={() => stageChane(1)} className={classes["reservation_footer_text"]} >
                                                 <span >{t("reservation.stageOne")}</span>
                                            </button>
                        }
                        
                       
                         {
                            stage === 2 ? <button className={classes["reservation_footer_text"]} style={{backgroundColor: "gray", cursor:"default"}} disabled>
                                                <span >{t("reservation.stageThree")}</span>
                                            </button>
                                            :
                                            <button onClick={() => stageChane(2)} className={classes["reservation_footer_text"]} >
                                                <span >{t("reservation.stageThree")}</span>
                                            </button>
                        }
                        
                       
                    </div>
                </div>
        </div>
        </>
    )
}