import { HttpClientRequests } from "../../../services/http-client-requests";
import { useEffect, useState } from "react";
import { Drinks } from "../../../models/drinks";
import classes from "./drinksOrderList.module.css"
import ButtonInput from "../../../components/buttons/buttonInput";
import { useTranslation } from 'react-i18next';

import cornerImg from "../../../assets/pageImages/CornerCut.png"
import cornerImgLeftBottom from "../../../assets/pageImages/DownLeftCorner.png";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/app.hooks";
import { addProduct } from "../../../redux/store/cartReduxState/cartSlice";

export default function DrinksOrderList(){
    const dispatch = useAppDispatch();
    const {t} = useTranslation();
    const [drinks, setDrinks] = useState<Drinks[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const currentEndpoint = window.location.pathname;
    const lastEndPoint = currentEndpoint.split("/");
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

    function addItem(productName: string, unit: string, price:number){
            const datas = {id: Math.random(), productName, unit, price, quantity: 1 };
            dispatch(addProduct(datas))
        }

    
    return(
        <>
                {!loading ? (
                    <div className={classes["menu_list_page"]} >

                        <table className={classes["drink_list_border"]}>
                            <div className={classes["drink_list_titles"]}>
                                {
                                    lastEndPoint[lastEndPoint.length-1] == "drinksOrderList" ?  <h1 ><Link style={{color: "rgba(211, 211, 211, 0.808)"}} 
                                    className={classes["drink_list_title"]} to="/orderMenu/drinksOrderList">{t("menuOrderDrink.title1")}</Link></h1>
                                    : <h1 ><Link className={classes["drink_list_title"]} to="/orderMenu/foodsOrderList">{t("menuOrderDrink.title1")}</Link></h1>

                                }
                                
                                <h1 ><Link className={classes["drink_list_title"]} to="/orderMenu/foodsOrderList">{t("menuOrderDrink.title2")}</Link></h1>
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
                                        <ButtonInput hoverColor='lightgray' onClick={() => addItem(drink.drinkName, drink.unit, drink.price)} buttonText={t("menuOrderDrink.addToCart")} type="button" ></ButtonInput>
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

