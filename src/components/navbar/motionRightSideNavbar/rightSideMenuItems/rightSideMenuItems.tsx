import { motion } from "framer-motion";
import classes from "./rightSideMenuItems.module.css"
import img1 from "../../../../assets/navbarImages/profileIcon.png";
import img2 from "../../../../assets/navbarImages/logoutIcon.png";

import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../../hooks/app.hooks";
import { IUsersTokenData } from "../../../../models/stateTypeUser";

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


export const MenuItem : React.FC<menuItems> = ({ isOpenNavigation })=> {
    const {t} = useTranslation();
    const text: string[] = [];
    const img: string[] = [];
    const getAuthToken = useAppSelector((state: {auth: IUsersTokenData}) => state.auth.token);
    
    if(getAuthToken){
        img.push (img1, img2 );
        text.push (
            t("rightSideBar.profile"), 
            t("leftSideBar.logout")
        )
    }

    function menuItemsEvents(name: string,isOpenNavigation : ()=> void, t: (key: string) => string): void {
        switch(name){
          case name = t("leftSideBar.logout"):
            localStorage.removeItem("authToken");
            localStorage.removeItem("userId");
            isOpenNavigation()
            window.location.reload();
          break  
        }
    }
    return(
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
                        <a  onClick={() => menuItemsEvents(text[i],isOpenNavigation,t)} >{text[i]}</a>
                    </div>
                  
                </motion.li>
            ))}
        </>
    )
   
}