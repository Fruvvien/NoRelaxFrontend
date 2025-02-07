import React, { useState, useEffect } from 'react';
import Input from '../../components/inputs/input';
import ButtonInput from '../../components/buttons/buttonInput';
import './login.css';
import { HttpClientRequests } from '../../services/http-client-requests';
import {BrowserRouter as Router, Link, } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {isEmail, isNotEmpty, hasMinLength } from '../../util/validation';

function Login(){
    
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState<string[]>([]);

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
                setErrors([])
                navigate('/')
                alert("Success login")
              
            }
            else{
                const newErrors: string[] = [];

                if(!isEmail(formState.email)){
                    newErrors.push('Invalid email address.');
                }
                if(!isNotEmpty(formState.password) || !hasMinLength(formState.password, 5)){
                    newErrors.push('You must provide a password with at least six characters');
                }
                
                setErrors(newErrors);
                if(errors.length > 0){
                    return {errors};
                }
               
                return {errors: null}

               
            }
        }
        
       /*  setFormState({
            email: "",
            password: ""
        }); */
     
    }
    

   

    return(
        <>
            <form id="loginPage" onSubmit={handleSubmit}>
                <div id='loginInputsAndTitle'>
                    <h1>Login</h1>
                    <div id='loginInputs'>
                        <Input labelText="Email" type="email" style={undefined} name='email' value={formState.email} onChange={(event)=> setValues("email", event)}></Input>
                        <Input labelText="Password" type="password" style={undefined} name='password' value={formState.password}  onChange={(event)=> setValues("password", event)}></Input>
                    </div>
                    <ul id='errors'>
                        {errors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                    <ButtonInput buttonText="Login" type='submit'></ButtonInput>
                </div>
                <Link id="link" to="/register">Register</Link>
            </form>
        </>
    )
}
export default Login;