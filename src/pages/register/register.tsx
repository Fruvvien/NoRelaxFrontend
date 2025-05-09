import React, { useState } from "react";
import Input from "../../components/inputs/input";
import ButtonInput from "../../components/buttons/buttonInput";
import classes from "./register.module.css";
import { User } from "../../models/Iuser";
import { HttpClientRequests } from "../../services/http-client-requests";
import {BrowserRouter as Router, Link, useNavigate,} from "react-router-dom";
import {isEmail, isNotEmpty, hasMinLength, allIsNotEmpty, notValidPhoneNumber, isValidBirthday } from '../../util/validation';
import { useTranslation } from 'react-i18next';
import img from "../../assets/loginImages/lockIcon.png"
import cornerImg from "../../assets/pageImages/CornerCut.png"
import cornerImgLeftBottom from "../../assets/pageImages/DownLeftCorner2.png";
import CustomDialog from "../../components/dialog/dialog";


function Register(){
    const navigate = useNavigate();
    const {t} = useTranslation();
    const [success, setSuccess] = useState(false);
    const [formState, setFromState] = useState<User>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        birthDay: '',
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
        const currentDate = new Date();
        const birthDate = new Date(formState.birthDay);
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        const monthDiff = currentDate.getMonth() - birthDate.getMonth();
        
        const dayDiff = currentDate.getDate() - birthDate.getDate();
        
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }
        if(age >= 18){
            const user: User = {
                firstName: formState?.firstName as string,
                lastName: formState?.lastName as string,
                email: formState?.email as string,
                password: formState?.password as string,
                phoneNumber: formState?.phoneNumber as string,
                birthDay : formState.birthDay as string
            }
            if(user){
                    const result = await HttpClientRequests.postData(user, "user");
                    console.log(formState.birthDay);
                    
                    if(result){
                        setErrors([]);
                        setSuccess(true);
                        setTimeout(() => {
                            navigate("/login")
                        }, 2000)
                        
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
                        if(!isNotEmpty(formState.phoneNumber)){
                            newErrors.push(t("error.invalidPhoneNumber"));
                        }
                        if(!allIsNotEmpty(formState.firstName, formState.lastName, formState.email, formState.password)){
                            newErrors.push(t("error.invalidEmptyField"));
                        }
                        if(!notValidPhoneNumber(formState.phoneNumber)){
                            newErrors.push(t("error.invalidPhoneNumber"));
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
        }else{
            setErrors([t("error.invalidAge")]);
        }
    }


    return (
        <>  
            <div className={classes["register-page"]}>
                <form  className={classes.background} onSubmit={handleSubmit}>
                    
                        <span><img className={classes["corner_img1"]} src={cornerImgLeftBottom} alt="" /></span>
                        <span><img className={classes["corner_img2"]} src={cornerImg} alt="" /></span>
                        <span><img className={classes["corner_img3"]} src={cornerImg} alt="" /></span>
                        <span><img className={classes["corner_img4"]} src={cornerImg} alt="" /></span>
                        <div className={classes["register-img-div"]}>
                            <img className={classes["register-img"]} src={img} alt="" />
                        </div>
                        
                        <Input labelText={t("register.inputLastName")} type="text" value={formState.lastName}  name="lastName" onChange={(event) => setValues('lastName', event)}></Input>
                        <Input labelText={t("register.inputFirstName")} type="text" value={formState.firstName}  name="firstName" onChange={(event) => setValues('firstName', event)} ></Input>
                    
                        <Input labelText={t("register.inputEmail")} type="email" value={formState.email}  name="email" onChange={(event) => setValues('email', event)}></Input>
                        <Input labelText={t("register.inputPassword")} type="password" value={formState.password}  name="password" onChange={(event) => setValues('password', event)}></Input>
                
                        <Input  labelText={"06303334455"} type="tel" value={formState.phoneNumber} name="phoneNumber" onChange={(event) => setValues('phoneNumber', event)}></Input>
                        <Input  labelText={""} type="date" value={formState.birthDay} name="birthDay" onChange={(event) => setValues('birthDay', event)}></Input>
                
                        <ul className={classes.errors}>
                                {errors.map((error) => (
                                    <li key={error}>{error}</li>
                                ))}
                            </ul>
                        <div className={classes["button-and-link-to-login"]}>
                            <ButtonInput hoverColor="lightgray"  buttonText={t("register.button")} type="submit"></ButtonInput>
                            <span  style={{zIndex:501, paddingBottom:10}}>{t("register.textNextToLoginLink")}<Link className={classes["link-to-login"]} to="/login" > {t("register.linkToLogin")}</Link></span>
                        </div>
                        <CustomDialog text={t("register.successRegistration")} open={success}></CustomDialog>
                        
                    
                
                </form>
            </div>
            
            
        </>

    )
}

export default Register;