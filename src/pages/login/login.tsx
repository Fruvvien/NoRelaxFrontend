import React, { useState, useEffect } from 'react';
import Input from '../../components/inputs/input';
import ButtonInput from '../../components/buttons/buttonInput';
import  classes from './login.module.css';
import { HttpClientRequests } from '../../services/http-client-requests';
import {BrowserRouter as Router, Link, } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {isEmail, isNotEmpty, hasMinLength } from '../../util/validation';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks/app.hooks';
import {  getToken, getUserId } from '../../redux/store/userReduxState/userSlice';
import { IUsersTokenData } from '../../models/stateTypeUser';


function Login(){

    const dispatch = useAppDispatch()
    const {t} = useTranslation();
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
        const result = await HttpClientRequests.postData(user, "auth/login");
        console.log(result);
        
        if(result){
            
            dispatch(getToken());
            dispatch(getUserId(result.userId))
            setErrors([])
            navigate('/')
            alert("Success login")
            
        }
        else{
            const newErrors: string[] = [];
            if(!isEmail(formState.email) && isNotEmpty(formState.email)){
                newErrors.push(t("error.invalidEmail"));
            }
            if(!isNotEmpty(formState.password) || !hasMinLength(formState.password, 5)){
                newErrors.push(t("error.invalidPassword"));
            }
            if(!isNotEmpty(formState.email) || !isNotEmpty(formState.password)){
                newErrors.push(t("error.invalidEmptyField"));
            }
            setErrors(newErrors);
            if(errors.length > 0){
                return {errors};
            }
            alert("invalid email or password")
            return {errors: null}
        }
    }
    return(
        <>
       
            <form  className={classes["login-page"]} onSubmit={handleSubmit}>
                <div className={classes.background}>
                    <div className={classes["login-inputs-and-title"]} >
                        <h1>{t("login.title")}</h1>
                        <div id='loginInputs'>
                            <Input labelText={t("login.inputEmail")} type="email" style={undefined} name='email' value={formState.email} onChange={(event)=> setValues("email", event)}></Input>
                            <Input labelText={t("login.inputPassword")} type="password" style={undefined} name='password' value={formState.password}  onChange={(event)=> setValues("password", event)}></Input>
                        </div>
                        <ul className={classes.error}>
                            {errors.map((error) => (
                                <li key={error}>{error}</li>
                            ))}
                        </ul>
                        <ButtonInput hoverColor='lightgray' buttonText={t("login.button")} type='submit'></ButtonInput>
                    </div>
                    <span>{t("login.textNextToRegisterLink")}<Link className={classes.link} to="/register"> {t("login.linkToRegister")}</Link></span>
                </div>
            </form>
       
            
        </>
    )
}
export default Login;