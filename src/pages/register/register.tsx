import React, { useState } from "react";
import Input from "../../components/inputs/input";
import ButtonInput from "../../components/buttons/buttonInput";
import "./register.css";
import { User } from "../../models/Iuser";
import { HttpClientRequests } from "../../services/http-client-requests";
import {BrowserRouter as Router, Link,} from "react-router-dom";

function Register(){
    const [formState, setFromState] = useState<User>({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    function setValues(identifier: string, event: React.ChangeEvent<HTMLInputElement>){
        setFromState( prevValues => ({
            ...prevValues,
            [identifier]: event.target.value
        }));
    }

    async  function handleSubmit (e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const user: User = {
            firstName: formState?.firstName as string,
            lastName: formState?.lastName as string,
            email: formState?.email as string,
            password: formState?.password as string
        }

        if(user){
            const result = await HttpClientRequests.postData(user, "user");
            if(!result){
                alert("This email already exists")
            }
        }
    }

    
    


    return (
        <>
            <form id="registerPage" onSubmit={handleSubmit}>
                <div id="registerInputs">
                    <h1>Register</h1>
                    <div id="nameInputs">
                        <Input labelText="First Name" type="text" style={{width: "100%"}} name="firstName" onChange={(event) => setValues('firstName', event)} ></Input>
                        <Input labelText="Last Name" type="text" style={{width: "100%"}} name="lastName" onChange={(event) => setValues('lastName', event)}></Input>
                    </div>
                
                    <div id="emailPasswordInputs">
                        <Input labelText="Email" type="email" style={{width: "100%"}} name="email" onChange={(event) => setValues('email', event)}></Input>
                        <Input labelText="Password" type="password" style={{width: "100%"}} name="password" onChange={(event) => setValues('password', event)}></Input>
                    </div>
                </div>
                
                <ButtonInput buttonText="Submit" type="submit"></ButtonInput>
                <Link id="linkToLogin"to="/login" >Login</Link>
            </form>
            
        </>

    )
}

export default Register;