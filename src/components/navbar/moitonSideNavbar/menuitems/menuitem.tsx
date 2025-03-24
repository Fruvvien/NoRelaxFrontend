/* eslint-disable react-hooks/rules-of-hooks */
import { motion } from "framer-motion";
import classes from "./menuitem.module.css"
import img1 from "../../../../assets/navbarImages/houseIcon.png";
import img2 from "../../../../assets/navbarImages/tableIcon.png";
import img3 from "../../../../assets/navbarImages/clockIcon.png";
import img4 from "../../../../assets/navbarImages/menu-book-icon-md.png";
import img5 from "../../../../assets/navbarImages/multipleUsersIcon.png";
import registerLock from "../../../../assets/navbarImages/registerLock.png";
import loginKeyIcon from "../../../../assets/navbarImages/keyIconGood.png";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../../hooks/app.hooks";
import { IUsersTokenData } from "../../../../models/stateTypeUser";
import { BrowserRouter as Router, Link } from "react-router-dom";

type menuItems = {
    isOpenNavigation: () => void
}

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        display:"flex",
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0, 
        display:"none",
        transition: {
            y: { stiffness: 1000 },
        },
    },
}



const iconPlaceholder: React.CSSProperties = {
    width: 40,
    height: 40,
    borderRadius: "50%",
    flex: "40px 0",
    marginRight: 20,
}

const textPlaceholder: React.CSSProperties = {
    borderRadius: 5,
    width: 200,
    height: 20,
    flex: 1,
}


export const MenuItem : React.FC<menuItems> = ({ isOpenNavigation }) => {
   
    

    const { t } = useTranslation();
    const endPoints: string[] = [];
    const text: string[] = [];
    const img: string[] = [];
    const getAuthToken = useAppSelector((state: { auth: IUsersTokenData }) => state.auth.token);

    if (!getAuthToken) {
        img.push(loginKeyIcon, registerLock,img3, img5);
        text.push(
            t("leftSideBar.login"),
            t("leftSideBar.register"),
            t("leftSideBar.openingHours"),
            t("leftSideBar.aboutUs")
        );
        endPoints.push(
            "/login",
            "/register",
            "/openingHours",
            "/aboutUs"
        )
    }
    if (getAuthToken) {
        img.push(img1, img2, img3, img4);
        text.push(
            t("leftSideBar.home"),
            t("leftSideBar.reserve"),
            t("leftSideBar.openingHours"),
            t("leftSideBar.menu"),
        );
        endPoints.push(
            "/",
            "/reserve",
            "/openingHoursWithAccount",
            "/orderMenu/drinksOrderList",
            "/aboutUs"
        )
    }


    function menuItemsEvents(name: string, isOpenNavigation : ()=> void,  t: (key: string) => string): void {
    
        switch (name) {
            case t("leftSideBar.menu"):
                isOpenNavigation()
                break;
            case t("leftSideBar.home"):
                isOpenNavigation()
                break;
            case t("leftSideBar.openingHours"):
                isOpenNavigation()
                break;
            case t("leftSideBar.reserve"):
                isOpenNavigation()
                break;    
        }
    }

    return (
        <>
            {img.map((image, i) => (
                <motion.li
                    key={i}
                    className={classes["list-item"]}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div style={{ ...iconPlaceholder }}>
                        <img src={image} style={{ width: "100%", height: "100%" }} />
                    </div>
                    <div style={{ ...textPlaceholder, color: "white", fontSize: "24px" }}>
                        <Link style={{color:"white", textDecoration:"none"}} to={endPoints[i]} onClick={() => menuItemsEvents(text[i],isOpenNavigation, t)}>{text[i]}</Link>
                    </div>
                </motion.li>
            ))}
        </>
    );
   
}