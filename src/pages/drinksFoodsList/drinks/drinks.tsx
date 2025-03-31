import { Link } from "react-router-dom"
import classes from "./drinks.module.css"
import cornerImg from "../../../assets/pageImages/CornerCut.png"
import cornerImgLeftBottom from "../../../assets/pageImages/DownLeftCorner.png";
import { useEffect, useState } from "react";
import { Products } from "../../../models/products";
import { HttpClientRequests } from "../../../services/http-client-requests";
import { useTranslation } from "react-i18next";

export default function Drinks(){
    const currentEndpoint = window.location.pathname;
    const lastEndPoint = currentEndpoint.split("/");
    const [drinks, setDrinks] = useState<Products[]>([]);
    const {t} = useTranslation();

    const getDrinks = async () =>{
            try{
                const response =  await HttpClientRequests.getProducts("auth/foodDrinkProducts","drinks")
                setDrinks(response);
            }catch (error: unknown){
                console.log(error);
            }
           
        }
        useEffect(()=>{
            getDrinks();
        }, [])

    return(
        <div className={classes["menu_list_page"]} >
            <table className={classes["drink_list_border"]}>
                <div className={classes["drink_list_titles"]}>
                    {
                        lastEndPoint[lastEndPoint.length-1] == "drinks" ?  
                        <h1 ><Link style={{color: "rgba(211, 211, 211, 0.808)"}} className={classes["drink_list_title"]} to="/drinks">{t("menuOrderDrink.title1")}</Link></h1>
                        : 
                        <h1 ><Link className={classes["drink_list_title"]} to="/foods">{t("menuOrderDrink.title1")}</Link></h1>

                    }
                    
                    <h1 ><Link className={classes["drink_list_title"]} to="/foods">{t("menuOrderDrink.title2")}</Link></h1>
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
                    </th>
                    {drinks.map((drink: Products) => (
                    <td className={classes["drink_list_elements"]} key={drink.id}>
                        <div className={classes["drink_list_element"]}>
                            {drink.productName}
                        </div>
                        <div className={classes["drink_list_element"]}>
                            {drink.unit}
                        </div>
                        <div className={classes["drink_list_element"]}>
                            {drink.price+ " Ft"}
                        </div>
                    </td> 
                    
                    ))}
                </tr>
            </table>
            
        </div>
    )
}