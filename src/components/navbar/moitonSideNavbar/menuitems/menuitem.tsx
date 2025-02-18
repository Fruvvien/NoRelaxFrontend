import { motion } from "framer-motion";
import classes from "./menuitem.module.css"
import img1 from "../../../../assets/navbarImages/houseIcon.png";
import img2 from "../../../../assets/navbarImages/tableIcon.png";
import img3 from "../../../../assets/navbarImages/clockIcon.png";
import img4 from "../../../../assets/navbarImages/downloadIcon.png";
import img5 from "../../../../assets/navbarImages/multipleUsersIcon.png";
import { useTranslation } from "react-i18next";




const colors = ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]
const img = [img1, img2, img3, img4, img5]

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

export const MenuItem = ({ i }: { i: number }) => {
    const {t} = useTranslation();
    const text = [
        t("leftSideBar.home"), 
        t("leftSideBar.reserve"), 
        t("leftSideBar.openingHours"), 
        t("leftSideBar.download"), 
        t("leftSideBar.aboutUs")
    ]
    const border = `2px solid ${colors[i]}`
    return (
        <motion.li
            className={classes["list-item"]}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div style={{ ...iconPlaceholder}} >
            <img src={img[i]} alt={`icon-${i}`} style={{ width: "100%", height: "100%" }} />
            </div>
            

            <div style={{ ...textPlaceholder,  color: "white", fontSize: "24px"}} >
                {text[i]}
            </div>
        </motion.li>
    )
}