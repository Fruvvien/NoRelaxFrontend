import type { Variants } from "framer-motion"
import {  motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Navigation } from "../rightSideNavigation/rightSideNavigation"
import classes from "./rightSideVariant.module.css"
import profileImg from "../../../../assets/navbarImages/profileIcon.png"

export default function Variants() {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const { height } = useDimensions(containerRef);


    return (
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                className={classes.nav}
            >
                <motion.div className={classes.background} variants={sidebarVariants} />
                    <Navigation />
                <MenuToggle toggle={() => setIsOpen(!isOpen)} />
            </motion.nav>
        )
    }
    
    
    const sidebarVariants = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
            display: "block",
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2,
            },
        }),
        closed: {
            clipPath: "circle(30px at calc(100% - 20px) 20px)",
            display: "none",
            transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    }
    
    interface PathProps {
        d?: string
        variants: Variants
        transition?: { duration: number }
    }
    
    /* const Path = (props: PathProps) => (
        <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke="hsl(0, 0.00%, 100.00%)"
            strokeLinecap="round"
            {...props}
        />
    ) */
    
    const MenuToggle = ({ toggle }: { toggle: () => void }) => (
        <button className={classes["toggle-container"]} onClick={toggle}>
            <img className={classes["toggle-container-img"]} style={{width:40}} src={profileImg} alt=""  />
        </button>
    )
    
    // Naive implementation - in reality would want to attach
    // a window or resize listener. Also use state/layoutEffect instead of ref/effect
    // if this is important to know on initial client render.
    // It would be safer to  return null for unmeasured states.
    const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
        const dimensions = useRef({ width: 0, height: 0 })
    
        useEffect(() => {
            if (ref.current) {
                dimensions.current.width = ref.current.offsetWidth
                dimensions.current.height = ref.current.offsetHeight
            }
            }, [ref])
        
            return dimensions.current
        }
    
