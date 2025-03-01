import { HttpClientRequests } from "../../services/http-client-requests";
import { useEffect, useState } from "react";
import { Drinks } from "../../models/drinks";
import classes from "./drinksFoodsOrderList.module.css"
import ButtonInput from "../../components/buttons/buttonInput";
import { useTranslation } from 'react-i18next';

export default function DrinksFoodsOrderList(){
    const {t} = useTranslation();
    const [drinks, setDrinks] = useState<Drinks[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getDrinks = async () =>{
        try{
            const response = await HttpClientRequests.getDrinks("auth/drinks")
            setDrinks(response);
            setLoading(false);
            
        }catch (error: unknown){
            console.log(error);
        }
       
    }
    useEffect(()=>{
        getDrinks();
        
    }, [])

    
    return(
        <>
            <div className={classes["menu_list"]}>
                {!loading ? (
                    <ul className={classes["drink_list"]} >
                        <li></li>
                        {drinks.map((drink: Drinks) => (
                           <li className={classes["drink_list_elements"]} key={drink.id}>
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
                                <ButtonInput buttonText={t("menuOrder.addToCart")} type="button" ></ButtonInput>
                            </div>
                            
                            
                           </li> 
                        ))}
                    </ul>
                ):(
                    <>
                        <div className="dots">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </>
                )

                
                    }
               

            </div>
        </>
    )



}

