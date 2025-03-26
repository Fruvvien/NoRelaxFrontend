import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import classes from "./foodsOrderList.module.css"
import ButtonInput from "../../../components/buttons/buttonInput";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/app.hooks";
import { HttpClientRequests } from "../../../services/http-client-requests";
import { Drinks } from "../../../models/drinks";
import cornerImg from "../../../assets/pageImages/CornerCut.png"
import cornerImgLeftBottom from "../../../assets/pageImages/DownLeftCorner.png";
import { addProduct } from "../../../redux/store/cartReduxState/cartSlice";
import { Foods } from "../../../models/foods";
import { Products } from "../../../models/products";

export default function FoodsOrderList(){
    const {t} = useTranslation();
    const currentEndpoint = window.location.pathname;
    const lastEndPoint = currentEndpoint.split("/");

    const dispatch = useAppDispatch();
    const [foods, setFoods] = useState<Products[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const getDrinks = async () =>{
        try{
            setTimeout( async() =>{
                const response =  await HttpClientRequests.getProducts("auth/foodDrinkProducts", "foods")
                setFoods(response);
                setLoading(false);
                
            }, 1000)
            
            
            
        }catch (error: unknown){
            console.log(error);
        }
        
    }

    useEffect(()=>{
            
        getDrinks();
            
    }, [])

    function addItem(id:number,productName: string, unit: string, price:number){
            const datas = {orderId: id, productName, unit, price, quantity: 1 };
            dispatch(addProduct(datas))
    }


    return(
        <>
        {!loading ? (
            <div className={classes["menu_list_page"]} >

                <table className={classes["food_list_border"]}>
                    <div className={classes["food_list_titles"]}>
                        <h1 ><Link className={classes["food_list_title"]}  to="/orderMenu/drinksOrderList">{t("menuOrderFood.title1")}</Link></h1>
                        {
                            lastEndPoint[lastEndPoint.length-1] == "foodsOrderList" ?  
                            <h1 ><Link  className={classes["food_list_title"]} style={{color: "rgba(211, 211, 211, 0.808)"}}   to="/orderMenu/foodsOrderList">{t("menuOrderFood.title2")}</Link></h1>:
                            <h1 ><Link className={classes["food_list_title"]} to="">{t("menuOrderFood.title2")}</Link></h1> 
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
                            <h3 className={classes["food_list_title_element"]}>{t("menuOrderFood.order")}</h3>
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
                            <div className={classes["food_list_element"]}>
                                <ButtonInput hoverColor='lightgray' onClick={() => addItem(food.id,food.productName, food.unit, food.price)} buttonText={t("menuOrderFood.addToCart")} type="button" ></ButtonInput>
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