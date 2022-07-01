import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/senselogo.png';
import BackgroundImage from '../../assets/background-image.jpg';
import './Signup.css';


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
    <div className='sign-up'>
        <div>
        <div className='signup-header'>
        <img src={Logo} alt='logo' className='sg1-logo' />
        <span className='logo1-text'>SENSEGRASS</span>
        </div>
        <h4 className='headerup-text'>LET'S GET STARTED</h4>
        <div className='signupinput-form'>
        <input name='email'
          type='email'
          value={username}
          placeholder='Email ID'
          onChange={(e) => setUsername(e.target.value)} />
          <p style={{color: '#0F9D58', fontStyle: 'italic'}}>Password must be 12 characters long<br></br>
          <p style={{color: '#0F9D58', fontStyle: 'italic'}}>one Uppercase,lowercase,1234,!@#$&</p></p>
          <input name='password'
          type='password'
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        <br></br>
          <input name='confirmPassword'
          type='password'
          value={confirmpassword}
          placeholder='Confirm Password'
          onChange={(e) => setConfirmPassword(e.target.value)}
          />
          </div>
          <Link to='/' className='signup-member'>ALREADY AN SG MEMBER?</Link>
          <br></br>
          <br></br>
        <button className='signup-button' onClick={SignUp}>Sign Up</button>
        </div>
        <img src={BackgroundImage} alt='agric' className='signup-image' />
     </div>
    );
}

export default SignUp;