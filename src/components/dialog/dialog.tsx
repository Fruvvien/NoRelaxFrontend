
import classes from "./dialog.module.css";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogContentText } from "@mui/material";
import cheersImg from "../../assets/loginImages/cheersIcon.png";


export default function CustomDialog(props: {text:string, open:boolean}){
    const  { t } = useTranslation();
    const [success, setSuccess] = useState(false);
    
   
    return(
        <React.Fragment>
            <Dialog open={props.open} onClose={() => setSuccess(false)}>
                <DialogContent style={{display:"flex", flexDirection:"column", alignItems:"center", backgroundColor:"black", border:"2px solid white"}}>
                    <DialogContentText style={{width:"100%", maxWidth:'200px', backgroundColor:"black", color:"white"}}>
                        <img style={{width:"100%", maxWidth:'200px', backgroundColor:"black"}} src={cheersImg} alt="" />
                        {props.text}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}