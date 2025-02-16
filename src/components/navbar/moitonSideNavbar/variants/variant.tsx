import type { Variants } from "framer-motion"
import { color, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Navigation } from "../navigation/navigation"
import { ThemeProvider } from "@emotion/react"
import { theme } from "../../../../util/colorTheme"
import classes from "./variant.module.css"

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
            clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
            display: "block",
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2,
            },
        }),
        closed: {
            clipPath: "circle(30px at 20px 20px)",
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
    
    const Path = (props: PathProps) => (
        <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke="hsl(0, 0.00%, 100.00%)"
            strokeLinecap="round"
            {...props}
        />
    )
    
    const MenuToggle = ({ toggle }: { toggle: () => void }) => (
        <button className={classes["toggle-container"]} onClick={toggle}>
            <svg width="23" height="23" viewBox="0 0 23 23">
                <Path
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" },
                    }}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" },
                    }}
                />
            </svg>
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
    
