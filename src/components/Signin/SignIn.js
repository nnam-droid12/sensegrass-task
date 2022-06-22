import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import {  Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/senselogo.png';
import BackgroundImage from '../../assets/background-image.jpg';
import './Signin.css';

const SignIn = () =>{

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    let signinnavigate = useNavigate();

    const SignIn = async () =>{
        try{
             await Auth.signIn(email, password);
             signinnavigate('/welcome');
        }catch(error){
            console.log('error logging user in',error)
        }
    }

    return(
    <div className='sign-in'>
    <div className='login-bg'>
    <img src={Logo} alt='logo' className='sg-logo' />
    <span className='logo-text'>SENSEGRASS</span>
    <h4 className='header-text'>LOGIN TO YOUR SG ACCOUNT</h4>
    <div className='input-form'>
     <input className='email'
     type='email'
     value={email}
     placeholder='email'
     onChange={(e) => setEmail(e.target.value)} />
    <br></br>
    <br></br>
      <input className='password'
     type='password'
     value={password}
     placeholder='password'
     onChange={(e) => setPassword(e.target.value)}
     required />
     </div>
     <Link to='/signup' className='signin-member'>NOT AN SG MEMBER YET?</Link>
     <Link to='/forgotpassword' className='forgotpassword'>Forgot password?</Link>
     <br></br>
    <br></br>
     <button className='signin-button' onClick={SignIn}>SIGN IN</button>
     <img src={BackgroundImage} alt='background' className='side-image' />
     </div>
    </div>
    );
}

export default SignIn;