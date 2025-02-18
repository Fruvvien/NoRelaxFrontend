import React from "react"

function Option(props: {img?: string, text?: string, value: string | undefined}){
    
   
   
    return(
        <>
            <option value={props.value}>
               <img src={props.img} alt=""/> 
            </option>
        </>
    )
}

export default Option