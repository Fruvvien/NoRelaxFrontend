import { useState } from "react"
import { useTranslation } from "react-i18next";
import classes from "./reservation.module.css"
import Calendarium from "../../components/calendar/calendar";
import ButtonInput from "../../components/buttons/buttonInput";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Reservation(){
    const {t} = useTranslation();
    const [stage, setStage] = useState(0);
    const [reservationTitle, setReservationTitle] = useState<string[]>([t("reservation.tableTitleOne"),t("reservation.tableTitleTwo"),t("reservation.tableTitleThree")])
    const [value, onChange] = useState<Value>(new Date());

    function stageChane(stageNumber: number){
        setStage(stageNumber)
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
                                <Calendarium></Calendarium>
                            </>
                            :
                            ""
                        }
                        {
                            stage === 1 ?
                            <>
                                <button className={classes["reservation_table"]}>
                                    <span className={classes["reservation_table_text"]}>{t("reservation.tableTextOne")}</span>
                                </button>
                                <button className={classes["reservation_table"]}>
                                    <span className={classes["reservation_table_text"]}>{t("reservation.tableTextTwo")}</span>
                                </button>
                                <button className={classes["reservation_table"]}>
                                    <span className={classes["reservation_table_text"]}>{t("reservation.tableTextThree")}</span>
                                </button>
                                <button className={classes["reservation_table"]}>
                                    <span className={classes["reservation_table_text"]}>{t("reservation.tableTextFour")}</span>
                                </button>
                                <button className={classes["reservation_table"]}>
                                    <span className={classes["reservation_table_text"]}>{t("reservation.tableTextFive")}</span>
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
                                    <select className={classes["reservation_select"]}>
                                        <option value="18:00">18:00</option>
                                        <option value="18:30">18:30</option>
                                        <option value="19:00">19:00</option>
                                        <option value="18:00">19:30</option>
                                        <option value="18:30">20:00</option>
                                        <option value="19:00">20:30</option>
                                        <option value="18:30">21:00</option>
                                        <option value="19:00">21:30</option>
                                    </select>   
                                </div>
                                <div style={{display:"flex", justifyContent:"center",  width:"100%"}}>
                                    <ButtonInput type="button" buttonText={t("reservation.submitReservation")}></ButtonInput>
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