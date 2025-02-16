import { motion } from "framer-motion";
import classes from "./menuitem.module.css"

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]
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
    const border = `2px solid ${colors[i]}`
    return (
        <motion.li
            className={classes["list-item"]}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div style={{ ...iconPlaceholder, border }} />
            <div style={{ ...textPlaceholder, border }} />
        </motion.li>
    )
}