import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/senselogo.png';
import BackgroundImage from '../../assets/background-image.jpg';
import './SignUp.css';


const SignUp = () =>{

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    let signupnavigate = useNavigate();

      const SignUp = async () =>{
          try{
            const { Newuser } = await Auth.signUp({
                username, 
                password
            });
            signupnavigate('/confirmsignup')
            console.log(Newuser)
          }catch(error){
            console.log('error signing up', error)
          }
      }

    return(
    <div className='sign-in'>
        <div>
        <div className='signin-header'>
        <img src={Logo} alt='logo' className='sg-logo' />
        <span className='logo-text'>SENSEGRASS</span>
        </div>
        <h4 className='header-signup'>LET'S GET STARTED</h4>
        <div className='input-form'>
        <input className='email'
        name='email'
        value={username}
        placeholder='email'
        onChange={(e) => setUsername(e.target.value)} />
        <br></br>
        <br></br>
          <input className='password'
        type='password'
        value={password}
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        <br></br>
          <input className='confirm password'
        type='password'
        value={confirmpassword}
        placeholder='confirm password'
        onChange={(e) => setConfirmPassword(e.target.value)}
          />
          </div>
          <Link to='/' className='signin-member'>ALREADY AN SG MEMBER?</Link>
          <br></br>
          <br></br>
        <button className='signin-button' onClick={SignUp}>Sign Up</button>
        </div>
        <img src={BackgroundImage} alt='background' className='side-image' />
     </div>
    );
}

export default SignUp;