import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import classes from "./foodsOrderList.module.css"

export default function FoodsOrderList(){
    const {t} = useTranslation();
    const currentEndpoint = window.location.pathname;
    const lastEndPoint = currentEndpoint.split("/");
    return(
        <>
            <div className={classes["food_order_list_page"]}>
                <h1 ><Link className={classes["drink_list_title"]}  to="/orderMenu/drinksOrderList">{t("menuOrderDrink.title1")}</Link></h1>
                    {
                        lastEndPoint[lastEndPoint.length-1] == "foodsOrderList" ?  
                        <h1 ><Link  className={classes["drink_list_title"]} style={{color: "rgba(211, 211, 211, 0.808)"}}   to="/orderMenu/foodsOrderList">{t("menuOrderDrink.title2")}</Link></h1>:
                        <h1 ><Link className={classes["drink_list_title"]} to="">{t("menuOrderDrink.title2")}</Link></h1> 
                    }
            </div>
            
        </>
    )
}