import { useTranslation } from "react-i18next";
import classes from "./languageSelector.module.css"
import { useEffect, useState } from "react";

function LanguageSelector(props: {text?: string[], img?:string[]}){
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState<string>("HU");

    useEffect(()=>{
        setSelectedLanguage(selectedLanguage);
    })

    function handleChange(text: string) {
        if(text == "EN" || text == "HU"){
            i18n.changeLanguage(text); 
            setSelectedLanguage(text);
        }
        
    }

    return(
        <>
            <div>
                {props.img?.map((imgSrc, index) => (
                    <div 
                    onClick={() => handleChange(props.text?.[index] ?? '')} 
                    key={index} 
                    className={classes["custom-option"]}>
                        <img className={selectedLanguage === props.text?.[index] ? classes["selected-option"] : ""}  src={imgSrc} alt={props.text?.[index]} style={{ width: '25px', height: '25px', marginRight: '5px'}}/>
                    </div>
                ))}
            </div>
        </>
    )
}


export default LanguageSelector