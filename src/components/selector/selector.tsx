import React, { useEffect, useState } from "react"
import Option from "./options/option"
import { useTranslation } from "react-i18next";

function Selector(props: {text?: string[], value?: string[] | number[], number : number }){
    const [options, setOptions] = useState<JSX.Element[]>([])
    const { i18n } = useTranslation();

    function createOptions(number: number): JSX.Element[]{
        const newOptions = []
        for (let index = 0; index < number; index++) {
            newOptions.push(<Option text={props.text?.[index] ?? ''} value={props.text?.[index] ?? ''}/>)
           
        }
        return newOptions
    }

    useEffect(() =>{
        setOptions(createOptions(props.number));
    }, [props.number])

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedValue = event.target.value;
        if(selectedValue == "EN" || selectedValue == "HU"){
            i18n.changeLanguage(selectedValue); 
            console.log(selectedValue)
        }
        
    }

    return(

        <>
            <select onChange={handleChange}>
                {options}
            </select>
        </>
    )
}


export default Selector