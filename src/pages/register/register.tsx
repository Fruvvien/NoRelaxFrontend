import React, { useState } from "react";
import Input from "../../components/inputs/input";
import ButtonInput from "../../components/buttons/buttonInput";
import classes from "./register.module.css";
import { User } from "../../models/Iuser";
import { HttpClientRequests } from "../../services/http-client-requests";
import {BrowserRouter as Router, Link, useNavigate,} from "react-router-dom";
import {isEmail, isNotEmpty, hasMinLength, allIsNotEmpty } from '../../util/validation';
import { useTranslation } from 'react-i18next';


function Register(){
     const navigate = useNavigate();
    const {t} = useTranslation();
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
                navigate("/login")
            }
            else{
                 const newErrors: string[] = [];
                
                if(!isEmail(formState.email) && isNotEmpty(formState.email)){
                    newErrors.push(t("error.invalidEmail"));
                }
                if(!isNotEmpty(formState.password) || !hasMinLength(formState.password, 5)){
                    newErrors.push(t("error.invalidPassword"));
                }
                if(!isNotEmpty(formState.firstName) || !isNotEmpty(formState.lastName)){
                    newErrors.push(t("error.invalidLastAndFirstName"));
                }
                if(!allIsNotEmpty(formState.firstName, formState.lastName, formState.email, formState.password)){
                    newErrors.push(t("error.invalidEmptyField"));
                }
                if(!result){
                    newErrors.push(t("error.emailIsExist"));
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
            <form className={classes["register-page"]} onSubmit={handleSubmit}>
                <div className={classes.background}>
                    <div className={classes["register-inputs"]}>
                        <h1>{t("register.title")}</h1>
                        <div className={classes["name-inputs"]}>
                            <Input labelText={t("register.inputFirstName")} type="text" value={formState.firstName} style={{width: "100%"}} name="firstName" onChange={(event) => setValues('firstName', event)} ></Input>
                            <Input labelText={t("register.inputLastName")} type="text" value={formState.lastName} style={{width: "100%"}} name="lastName" onChange={(event) => setValues('lastName', event)}></Input>
                        </div>
                    
                        <div className={classes["email-password-inputs"]}>
                            <Input labelText={t("register.inputEmail")} type="email" value={formState.email} style={{width: "100%"}} name="email" onChange={(event) => setValues('email', event)}></Input>
                            <Input labelText={t("register.inputPassword")} type="password" value={formState.password} style={{width: "100%"}} name="password" onChange={(event) => setValues('password', event)}></Input>
                        </div>
                        <ul className={classes.errors}>
                            {errors.map((error) => (
                                <li key={error}>{error}</li>
                            ))}
                        </ul>
                    </div>  
                    <ButtonInput hoverColor="lightgray"  buttonText={t("register.button")} type="submit"></ButtonInput>
                    <span>{t("register.textNextToLoginLink")}<Link className={classes["link-to-login"]} to="/login" > {t("register.linkToLogin")}</Link></span>
                </div>
                
            </form>
            
        </>

    )
}

export default Register;