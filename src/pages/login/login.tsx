import React, { useState } from 'react';
import Input from '../../components/inputs/input';
import ButtonInput from '../../components/buttons/buttonInput';
import './login.css';
import { HttpClientRequests } from '../../services/http-client-requests';
import {BrowserRouter as Router, Link,} from "react-router-dom";

function Login(){
    
    
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    })

    function setValues(indentifier: string, event : React.ChangeEvent<HTMLInputElement>){
        setFormState(prevValues => ({
            ...prevValues,
            [indentifier]: event.target.value
        }))
    }    

    async function handleSubmit(e: React.FormEvent<HTMLElement>) {
        e.preventDefault();
        const user= {
            email: formState.email as string,
            password: formState.password as string,
        }

        if(user){
            const result = await HttpClientRequests.postData(user, "auth/login");
            console.log(result);
            
            if(result){
                alert("success login")
            }
        }
    }



    return(
        <>
            <form id="loginPage" onSubmit={handleSubmit}>
                <div id='loginInputsAndTitle'>
                    <h1>Login</h1>
                    <div id='loginInputs'>
                        <Input labelText="Email" type="email" style={undefined} name='email' onChange={(event)=> setValues("email", event)}></Input>
                        <Input labelText="Password" type="password" style={undefined} name='password' onChange={(event)=> setValues("password", event)}></Input>
                    </div>
                    <ButtonInput buttonText="Login" type='submit'></ButtonInput>
                </div>
                <Link id="linkToRegister" to="/register">Register</Link>
            </form>
        </>
    )
}
export default Login;