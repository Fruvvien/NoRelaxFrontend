import { motion } from "framer-motion";
import classes from "./rightSideMenuItems.module.css"
import img1 from "../../../../assets/navbarImages/houseIcon.png";
import img2 from "../../../../assets/navbarImages/tableIcon.png";
import img3 from "../../../../assets/navbarImages/clockIcon.png";
import img4 from "../../../../assets/navbarImages/downloadIcon.png";
import img5 from "../../../../assets/navbarImages/multipleUsersIcon.png";
import img6 from "../../../../assets/navbarImages/multipleUsersIcon.png";

import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../../hooks/app.hooks";
import { IUsersTokenData } from "../../../../models/stateTypeUser";



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
function menuItemsEvents(name: string, t: (key: string) => string): void {
    
    
    switch(name){
      case name = t("leftSideBar.logout"):
        localStorage.removeItem("authToken");
        window.location.reload();
      break  
    }
}

export const MenuItem = () => {
    const {t} = useTranslation();
    const text: string[] = [];
    const img: string[] = [];
    const getAuthToken = useAppSelector((state: {auth: IUsersTokenData}) => state.auth.token);
    
    if(!getAuthToken){
        
        img.push(img3, img4, img5);
        text.push (
            t("leftSideBar.openingHours"), 
            t("leftSideBar.download"), 
            t("leftSideBar.aboutUs")
        )
    }
    if(getAuthToken){
        
        img.push (img1, img2, img3, img4, img5, img6 );
        text.push (
            t("leftSideBar.home"), 
            t("leftSideBar.reserve"), 
            t("leftSideBar.openingHours"), 
            t("leftSideBar.download"), 
            t("leftSideBar.aboutUs"),
            t("leftSideBar.logout")
           
        )
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
                        <a  onClick={() => menuItemsEvents(text[i],t)} >{text[i]}</a>
                    </div>
                  
                </motion.li>
            ))}
        </>
    )
   
}