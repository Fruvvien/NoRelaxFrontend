import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import classes from "./foods.module.css"
import { useEffect, useState } from "react";
import { HttpClientRequests } from "../../../services/http-client-requests";
import cornerImg from "../../../assets/pageImages/CornerCut.png"
import cornerImgLeftBottom from "../../../assets/pageImages/DownLeftCorner.png";
import { Products } from "../../../models/products";

export default function Foods(){
    const {t} = useTranslation();
    const currentEndpoint = window.location.pathname;
    const lastEndPoint = currentEndpoint.split("/");
    const [foods, setFoods] = useState<Products[]>([]);

    const getDrinks = async () =>{
        try{
            const response =  await HttpClientRequests.getProducts("foodDrinkProducts", "foods")
            setFoods(response);
        }catch (error: unknown){
            console.log(error);
        }
        
    }

    useEffect(()=>{
            
        getDrinks();
            
    }, [])


    return(
        <>
            <div className={classes["menu_list_page"]} >

                <table className={classes["food_list_border"]}>
                    <div className={classes["food_list_titles"]}>
                        <h1 ><Link className={classes["food_list_title"]}  to="/drinks">{t("menuOrderFood.title1")}</Link></h1>
                        {
                            lastEndPoint[lastEndPoint.length-1] == "foods" ?  
                            <h1 ><Link  className={classes["food_list_title"]} style={{color: "rgba(211, 211, 211, 0.808)"}}   to="/foods">{t("menuOrderFood.title2")}</Link></h1>:
                            <h1 ><Link className={classes["food_list_title"]} to="/drinks">{t("menuOrderFood.title2")}</Link></h1> 
                        }
                    </div>
                    <span><img className={classes["corner_img1"]} src={cornerImgLeftBottom} alt="" /></span>
                    <span><img className={classes["corner_img2"]} src={cornerImg} alt="" /></span>
                    <span><img className={classes["corner_img3"]} src={cornerImg} alt="" /></span>
                    <span><img className={classes["corner_img4"]} src={cornerImg} alt="" /></span>
                    <tr  className={classes["food_list"]}>
                        <th className={classes["food_list_title_elements"]}>
                            <h3 className={classes["food_list_title_element"]}>{t("menuOrderFood.foodName")}</h3>
                            <h3 className={classes["food_list_title_element"]}>{t("menuOrderFood.amount")}</h3>
                            <h3 className={classes["food_list_title_element"]}>{t("menuOrderFood.price")}</h3>
                        </th>
                        {foods.map((food: Products) => (
                        <td className={classes["food_list_elements"]} key={food.id}>
                            <div className={classes["food_list_element"]}>
                                {food.productName}
                            </div>
                            <div className={classes["food_list_element"]}>
                                {food.unit}
                            </div>
                            <div className={classes["food_list_element"]}>
                                {food.price+ " Ft"}
                            </div>
                        </td> 
                        
                        ))}
                    </tr>
                </table>
                
            </div>
        </>
    )
}