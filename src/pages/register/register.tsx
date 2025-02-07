import React, { useState } from "react";
import Input from "../../components/inputs/input";
import ButtonInput from "../../components/buttons/buttonInput";
import "./register.css";
import { User } from "../../models/Iuser";
import { HttpClientRequests } from "../../services/http-client-requests";
import {BrowserRouter as Router, Link,} from "react-router-dom";
import {isEmail, isNotEmpty, hasMinLength } from '../../../util/validation';

function Register(){
    const [formState, setFromState] = useState<User>({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState<string[]>([]);
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
            if(result){
                setErrors([]);
                alert("Success create!");
            }
            else{
                 const newErrors: string[] = [];
                
                if(!isEmail(formState.email)){
                    newErrors.push('Invalid email address.');
                }
                if(!isNotEmpty(formState.password) || !hasMinLength(formState.password, 5)){
                    newErrors.push('You must provide a password with at least six characters');
                }
                if(!isNotEmpty(formState.firstName) || !isNotEmpty(formState.lastName)){
                    newErrors.push('Please provide both your first and last name');
                }
                if(!result){
                    newErrors.push('This email address already exists');
                }
                
                setErrors(newErrors);
                if(errors.length > 0){
                    return {errors};
                }
            
                return {errors: null}
            }
        }
    }


    return (
        <>
            <form id="registerPage" onSubmit={handleSubmit}>
                <div id="registerInputs">
                    <h1>Register</h1>
                    <div id="nameInputs">
                        <Input labelText="First Name" type="text" value={formState.firstName} style={{width: "100%"}} name="firstName" onChange={(event) => setValues('firstName', event)} ></Input>
                        <Input labelText="Last Name" type="text" value={formState.lastName} style={{width: "100%"}} name="lastName" onChange={(event) => setValues('lastName', event)}></Input>
                    </div>
                
                    <div id="emailPasswordInputs">
                        <Input labelText="Email" type="email" value={formState.email} style={{width: "100%"}} name="email" onChange={(event) => setValues('email', event)}></Input>
                        <Input labelText="Password" type="password" value={formState.password} style={{width: "100%"}} name="password" onChange={(event) => setValues('password', event)}></Input>
                    </div>
                </div>
                <ul id='errors'>
                        {errors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                <ButtonInput buttonText="Submit" type="submit"></ButtonInput>
                <Link id="linkToLogin"to="/login" >Login</Link>
            </form>
            
        </>

    )
}

export default Register;