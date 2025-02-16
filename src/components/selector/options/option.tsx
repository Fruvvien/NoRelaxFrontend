import React from "react"


function Option(props: {img?: string, text?: string, value: string | undefined}){
    
   
   
    return(
        <>
            <option value={props.value}>
                {props.text}
            </option>
        </>
    )
}

export default Option