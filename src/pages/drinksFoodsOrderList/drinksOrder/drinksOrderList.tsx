import { HttpClientRequests } from "../../../services/http-client-requests";
import { useEffect, useState } from "react";
import { Drinks } from "../../../models/drinks";
import classes from "./drinksOrderList.module.css"
import ButtonInput from "../../../components/buttons/buttonInput";
import { useTranslation } from 'react-i18next';

import cornerImg from "../../../assets/pageImages/CornerCut.png"
import cornerImgLeftBottom from "../../../assets/pageImages/DownLeftCorner.png";
import { Link } from "react-router-dom";

export default function DrinksOrderList(){
    const {t} = useTranslation();
    const [drinks, setDrinks] = useState<Drinks[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getDrinks = async () =>{
        try{
            setTimeout( async() =>{
                const response =  await HttpClientRequests.getDrinks("auth/drinks")
                setDrinks(response);
                setLoading(false);
            }, 1000)
            
            
            
        }catch (error: unknown){
            console.log(error);
        }
       
    }

    useEffect(()=>{
        getDrinks();
        
    }, [])

    
    return(
        <>
                {!loading ? (
                    <div className={classes["menu_list_page"]} >

                        <table className={classes["drink_list_border"]}>
                            <div className={classes["drink_list_titles"]}>
                                <h1 ><Link className={classes["drink_list_title"]} to="">{t("menuOrderDrink.title1")}</Link></h1>
                                <h1 ><Link className={classes["drink_list_title"]} to="">{t("menuOrderDrink.title2")}</Link></h1>
                            </div>
                            <span><img className={classes["corner_img1"]} src={cornerImgLeftBottom} alt="" /></span>
                            <span><img className={classes["corner_img2"]} src={cornerImg} alt="" /></span>
                            <span><img className={classes["corner_img3"]} src={cornerImg} alt="" /></span>
                            <span><img className={classes["corner_img4"]} src={cornerImg} alt="" /></span>
                            <tr  className={classes["drink_list"]}>
                                <th className={classes["drink_list_title_elements"]}>
                                    <h3 className={classes["drink_list_title_element"]}>{t("menuOrderDrink.drinkName")}</h3>
                                    <h3 className={classes["drink_list_title_element"]}>{t("menuOrderDrink.amount")}</h3>
                                    <h3 className={classes["drink_list_title_element"]}>{t("menuOrderDrink.price")}</h3>
                                    <h3 className={classes["drink_list_title_element"]}>{t("menuOrderDrink.order")}</h3>
                                </th>
                                {drinks.map((drink: Drinks) => (
                                <td className={classes["drink_list_elements"]} key={drink.id}>
                                    <div className={classes["drink_list_element"]}>
                                        {drink.drinkName}
                                    </div>
                                    <div className={classes["drink_list_element"]}>
                                        {drink.unit}
                                    </div>
                                    <div className={classes["drink_list_element"]}>
                                        {drink.price+ " Ft"}
                                    </div>
                                    <div className={classes["drink_list_element"]}>
                                        <ButtonInput hoverColor='lightgray' buttonText={t("menuOrderDrink.addToCart")} type="button" ></ButtonInput>
                                    </div>
                                </td> 
                                
                                ))}
                            </tr>
                        </table>
                        
                    </div>
                ):(
                    <>
                        <div className={classes["dots_div"]}>
                            <div className="dots">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </div>
                    </>
                )

                
                    }
               

        </>
    )



}

