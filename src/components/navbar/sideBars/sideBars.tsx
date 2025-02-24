import Variants from "../moitonSideNavbar/variants/variant"
import RightSideBar from "../motionRightSideNavbar/rightSideBar/rightSideBar"
import classes from  "./sideBars.module.css"
export default function SideBars(){
    return(
        <>
            <div className={classes.sideBars}>
                <Variants></Variants>
                <RightSideBar></RightSideBar>
            </div>
        </>
    )
}