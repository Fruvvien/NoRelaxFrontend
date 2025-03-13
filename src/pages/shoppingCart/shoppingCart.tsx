import { useEffect, useState, useRef } from "react";
import classes from "./shoppingCart.module.css"
import { useTranslation } from "react-i18next";
import { Icart } from "../../models/stateCart";
import { useAppSelector } from "../../hooks/app.hooks";
import ButtonInput from "../../components/buttons/buttonInput";
import { useDispatch } from "react-redux";
import { quantityMinus, quantityPlus, removeFromCart } from "../../redux/store/cartReduxState/cartSlice";

export default function ShoppingCart(){
    const {t} = useTranslation();
    const [loading, setLoading] = useState<boolean>(true);
    const getCartItems : Icart[] = useAppSelector((item) => item.cart);
    const cartItemId = useRef(0);
    const dispatch = useDispatch();
    const cartItemsFullPrice = useAppSelector((item) => item.cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
    
    useEffect(() =>{
        const foundItem = getCartItems.find((items) => items.id != 0);
        cartItemId.current = foundItem ? foundItem.id : 0;
    }, [getCartItems])

    setTimeout(() =>{
        setLoading(false);
    }, 1000)


    function minusButton(id: number){
        dispatch(quantityMinus(id))
    }

    function plusButton(id: number){
        dispatch(quantityPlus(id))
    }

    function removeButton(id: number){
        dispatch(removeFromCart(id))
    }
    return(
        <>
        {!loading ?
            <div className={classes["shopping-cart-page"]}>
                <table className={classes["shopping-cart-container"]}>
                    <thead>
                        <div className={classes["shopping-cart-header"]}>
                            <h1>
                                {t("cart.title")}
                            </h1>
                        </div>
                        <th className={classes["shopping-cart-titles"]}>
                            <h3 className={classes["shopping-cart-title"]}>{t("cart.product")}</h3>
                            <h3 className={classes["shopping-cart-title"]}>{t("cart.unit")}</h3>
                            <h3 className={classes["shopping-cart-title"]}>{t("cart.price")}</h3>
                            <h3 className={classes["shopping-cart-title"]}>{t("cart.removeFromCart")}</h3>
                        </th>
                    </thead>
                    <tbody>
                        <tr className={classes["shopping-cart-orders"]} >
                            {
                                cartItemsFullPrice === 0 ?  
                                <td>
                                    <p>{t("cart.cartIsEmpty")}</p>
                                </td>
                                :
                                <>
                                    
                                    {getCartItems.map((items) =>(
                                    items.id != 0 ?
                                    <td className={classes["shopping-cart-td"]} key={items.id}>
                                            <div className={classes["shopping-cart-items-first-column"]}>{items.productName}{`(${items.unit})`}</div>
                                            <div className={classes["shopping-cart-items-button"]}> 
                                                <button onClick={() => minusButton(items.id) } type="button" className={classes["shopping-cart-button-left"]}>-</button> 
                                                    {items.quantity} {t("cart.quantity")}
                                                <button onClick={() => plusButton(items.id) } type="button" className={classes["shopping-cart-button-right"]}>+</button>
                                            </div>
                                            <div className={classes["shopping-cart-items"]}>{items.price} Ft</div>
                                            <div className={classes["shopping-cart-items"]}><ButtonInput onClick={() => removeButton(items.id)} hoverColor='lightgray' buttonText={t("cart.removeButton")} type="button"></ButtonInput></div>     
                                    </td>
                                    :
                                    ""
                                    ))
                                    
                                    }
                                    
                                </>
                            }
                        </tr>
                    </tbody>
                    <tfoot>
                        <div className={classes["shopping-cart-footer"]}>
                            <span className={classes["shopping-cart-full-price"]} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>{t("cart.finalPrice")} {cartItemsFullPrice} Ft</span>
                        </div>
                    </tfoot>
                </table>
                
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