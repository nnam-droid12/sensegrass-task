import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () =>{

    const [username, setUsername] = useState('');
     let forgotnavigate = useNavigate();

    const SubmitEmail = async () =>{
        try{
            await Auth.forgotPassword(username);
            toast.success('Code successfully sent to your email');
            forgotnavigate('/newpassword');
        }catch(err){
            toast.error('This is not a registered email,please headup to the signUp page to register');
        }
    }

    return(
        <div className='sign-in'>
        <h3 style={{display: 'flex', 
        justifyContent:'center', 
        alignItems:'center',color:'#90EE90'}}>PASSWORD RECOVERY</h3>
        <h5 style={{display: 'flex', 
        justifyContent:'center', 
        alignItems:'center',color:'#90EE90'}}>* PLEASE ENTER YOUR REGISTERED EMAIL ID *</h5>
        <div>
         <input className='password-forgot'
         type='email'
         placeholder='Email ID'
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         />
         <br></br>
         <br></br>
         <button className='signin-button' onClick={SubmitEmail}>Submit email</button>
         </div>
        </div>
    )
}
export default ForgotPassword;