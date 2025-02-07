import React from "react";
import ButtonInput from "../../components/buttons/buttonInput";
import { useNavigate } from 'react-router-dom';

function Landing(){
    const navigate = useNavigate();

    function deleteFromLocalStorage(): void {
        localStorage.removeItem("authToken");
        console.log("asd");
        window.location.reload();
        // navigate("/");
    }
    return(
        <>
        <p>asd</p>
        <ButtonInput buttonText="Logout" type="button" onClick={deleteFromLocalStorage}></ButtonInput>
        </>

    )
}

export default Landing;