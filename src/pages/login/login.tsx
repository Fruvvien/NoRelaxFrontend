import React from 'react';
import Input from '../../components/inputs/input';
import ButtonInput from '../../components/buttons/buttonInput';
import './login.css';

function Login(){
    return(
        <>
        <div id="loginPage">
            <div id='title'>
                <h1>Login</h1>
                <div id='loginInputs'>
                    <Input labelName="Email" type="email" style={undefined}></Input>
                    <Input labelName="Password" type="password" style={undefined}></Input>
                </div>
                <ButtonInput buttonText="Login"></ButtonInput>
            </div>
            
        </div>
        </>
    )
}
export default Login;