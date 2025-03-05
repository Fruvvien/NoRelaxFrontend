import { useState } from "react";
import classes from "./shoppingCart.module.css"

export default function ShoppingCart(){
    const [loading, setLoading] = useState<boolean>(true);
    setTimeout( async() =>{
        setLoading(false);
    }, 1000)
    return(
        <>
        {!loading ?
            <div className={classes["shopping-cart-page"]}>
                <div className={classes["shopping-cart-container"]}>
                    
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