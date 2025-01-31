import React from "react";
import Input from "../../components/inputs/input";
import ButtonInput from "../../components/buttons/buttonInput";
import "./register.css";

function Register(){

    return (
        <>
            <div id="registerPage">
                <div id="registerInputs">
                    <div id="nameInputs">
                        <Input labelName="First Name" type="text" style={{width: "100%"}}></Input>
                        <Input labelName="Last Name" type="text" style={{width: "100%"}}></Input>
                    </div>
                
                    <div id="emailPasswordInputs">
                        <Input labelName="Email" type="email" style={{width: "100%"}}></Input>
                        <Input labelName="Password" type="password" style={{width: "100%"}}></Input>
                        <Input labelName="Confirm Password" type="password" style={{width: "100%"}}></Input>
                    </div>
                </div>
                
                <ButtonInput buttonText="Submit"></ButtonInput>
            </div>
            
        </>

    )
}

export default Register;