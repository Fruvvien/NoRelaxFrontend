import { motion } from "framer-motion"
import { MenuItem } from "../menuitems/menuitem"
import classes from "./navigation.module.css"

const navVariants = {
    open: {
        display:"block",
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        display:"none",
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
}

export const Navigation = () => (
    <motion.ul className={classes.list} variants={navVariants}>
        
            <MenuItem />
        
    </motion.ul>
)