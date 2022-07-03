import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import {  Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logo from '../../assets/senselogo.png';
import BackgroundImage from '../../assets/background-image.jpg';
import './Signin.css';

const SignIn = () =>{

    const[email, setEmail] = useState("");
    const[signinpassword, setSigninPassword] = useState("");

    let signinnavigate = useNavigate();

    const SignIn = async () =>{
        try{
             await Auth.signIn(email, signinpassword);
             toast.success('user Logged in successfully')
             signinnavigate('/welcome');
        }catch(error){
            toast.error('Error Logging user,Please check your password');
        }
    }


    return(
    <div className='sign-in'>
        <div>
        <div className='signin-header'>
        <img src={Logo} alt='logo' className='sg-logo' />
        <span className='logo-text'>SENSEGRASS</span>
        </div>
        <h4 className='header-text'>LOGIN TO YOUR SG ACCOUNT</h4>
        <div className='input-form'>
        <input
        type='email'
        value={email}
        placeholder='email ID'
        onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        <br></br>
        <input
        type='password'
        value={signinpassword}
        placeholder='password'
        onChange={(e) => setSigninPassword(e.target.value)}
        required />
        </div>
        <Link to='/signup' className='signin-member'>NOT AN SG MEMBER YET?</Link>
        <Link to='/forgotpassword' className='forgotpassword'>Forgot password?</Link>
        <br></br>
        <br></br>
        <button className='signin-button' onClick={SignIn}>SIGN IN</button>
        </div>
        <img src={BackgroundImage} alt='background' className='side-image' />
        
    </div>
    );
}

export default SignIn;