import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/senselogo.png';
import './SignUp.css';


const SignUp = () =>{

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    let signupnavigate = useNavigate();

      const SignUp = async () =>{
          try{
            const { user } = await Auth.signUp({
                username, 
                password
            });
            signupnavigate('/confirmsignup')
            console.log(user)
          }catch(error){
            console.log('error signing up', error)
          }
      }

    return(
    <div className='signup'>
    <div className='signup-bg'>
    <img src={Logo} alt='logo' className='sg-logo' />
    <span className='logo-text'>SENSEGRASS</span>
        <h4 className='header-signup'>LET'S GET STARTED</h4>
     <input className='email'
     name='email'
     value={username}
     placeholder='email'
     onChange={(e) => setUsername(e.target.value)} />
     <br></br>
     <br></br>
      <input className='password'
     name='password'
     value={password}
     placeholder='password'
     onChange={(e) => setPassword(e.target.value)} />
     <br></br>
     <br></br>
      <input className='confirm password'
     name='confirm password'
     value={password}
     placeholder='confirm password'
     onChange={(e) => setPassword(e.target.value)}
      />
      <Link to='/' className='signup-member'>ALREADY AN SG MEMBER?</Link>
     <button className='signup-button' onClick={SignUp}>Sign Up</button>
     </div>
    </div>
    );
}

export default SignUp;