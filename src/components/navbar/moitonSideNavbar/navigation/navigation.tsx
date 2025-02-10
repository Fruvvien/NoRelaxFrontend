import { motion } from "framer-motion"
import { MenuItem } from "../menuitems/menuitem"

const navVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
}
const list: React.CSSProperties = {
    listStyle: "none",
    padding: 25,
    margin: 0,
    position: "absolute",
    top: 80,
    width: 230,
  }

export const Navigation = () => (
    <motion.ul style={list} variants={navVariants}>
        {[0, 1, 2, 3, 4].map((i) => (
            <MenuItem i={i} key={i} />
        ))}
    </motion.ul>
)