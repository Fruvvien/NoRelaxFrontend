import { useEffect, useState, useRef } from "react";
import classes from "./shoppingCart.module.css"
import { useTranslation } from "react-i18next";
import { Icart } from "../../models/stateCart";
import { useAppSelector } from "../../hooks/app.hooks";
import ButtonInput from "../../components/buttons/buttonInput";

export default function ShoppingCart(){
    const {t} = useTranslation();
    const [loading, setLoading] = useState<boolean>(true);
    const getCartItems : Icart[] = useAppSelector((item) => item.cart);
    const cartItemId = useRef(0);
    useEffect(() =>{
        const foundItem = getCartItems.find((items) => items.id != 0);
        cartItemId.current = foundItem ? foundItem.id : 0;
        console.log(foundItem);
        
    }, [getCartItems])
    setTimeout( async() =>{
        setLoading(false);
    }, 1000)
    return(
        <>
        {!loading ?
            <div className={classes["shopping-cart-page"]}>
                <div className={classes["shopping-cart-container"]}>
                    <div className={classes["shopping-cart-header"]}>
                        <h1>
                            {t("cart.title")}
                        </h1>
                    </div>
                    <table className={classes["shopping-cart-body"]}>
                        <tr className={classes["shopping-cart-orders"]} >
                            <th className={classes["shopping-cart-title"]}>
                                <h3>{t("cart.product")}</h3>
                                <h3>{t("cart.unit")}</h3>
                                <h3>{t("cart.price")}</h3>
                                <h3>{t("cart.removeFromCart")}</h3>
                            </th>
                            {
                                cartItemId.current === 0 ?  
                                <td>
                                    <p>{t("cart.cartIsEmpty")}</p>
                                </td>
                                :
                                <>
                                  {getCartItems.map((items) =>(
                                    items.id != 0 ?
                                    <td className={classes["shopping-cart-td"]} key={items.id}>
                                        <div className={classes["shopping-cart-items"]}>{items.productName} {items.unit}</div>
                                        <div className={classes["shopping-cart-items"]}>{items.quantity}</div>
                                        <div className={classes["shopping-cart-items"]}>{items.price} Ft</div>
                                        <div className={classes["shopping-cart-items"]}><ButtonInput buttonText={t("cart.removeButton")} type="button"></ButtonInput></div>        
                                    </td>
                                    :
                                    ""
                                    ))
                                    }
                                </>
                            }
                        </tr>
                    </table>
                    <div className={classes["shopping-cart-footer"]}>
                        
                    </div>
                </div>
            </div>
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
           
        </>
    )
}