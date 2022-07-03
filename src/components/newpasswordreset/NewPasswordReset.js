import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ForgotPassword = () =>{

    const [username, setUsername] = useState('');
    const [number, setNumber] = useState('');
    const [newpassword, setNewpassword] = useState('');
    let newnavigate = useNavigate();

    const SubmitNewpassword = async () =>{
        try{
            await Auth.forgotPasswordSubmit(username, number, newpassword);
            toast.success('Password Reset Successfully');
            newnavigate('/');

        }catch(err){
            toast.error('Password Must be 12 Characters long.');
        }
    }

    return(
        <div className='sign-in'>
         <div classNme='signin-header'>
         <h3 style={{display: 'flex', 
        justifyContent:'center', 
        alignItems:'center',color:'#90EE90'}}>Password Reset</h3>
        <h5 style={{display: 'flex', 
        justifyContent:'center', 
        alignItems:'center',color:'#90EE90'}}>* PLEASE ENTER THE CODE SENT TO EMAIL AND ENTER YOUR PREFERRED NEW PASSWORD *</h5>
        <h5 style={{display: 'flex', 
        justifyContent:'center', 
        alignItems:'center',color:'#90EE90'}}>** PASSWORD MUST BE 12 CHARACTERS LONG. ONE UPPERCASE, LOWERCASE,1234, !@#&$ **</h5>
         <div className='input-form'>
         <input className='password-username'
         type='email'
         placeholder='email'
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         />
         <br></br>
         <br></br>
          <input className='password-number'
         type='number'
         placeholder='code sent to mail'
         value={number}
         onChange={(e) => setNumber(e.target.value)}
         />
         <br></br>
         <br></br>
          <input className='password-newpassword'
         type='password'
         placeholder='new pasword'
         value={newpassword}
         onChange={(e) => setNewpassword(e.target.value)}
         />
         </div>
        <br></br>
        <br></br>
         <button className='signin-button' onClick={SubmitNewpassword}>Reset Password</button>
         </div>
        </div>
    )
}
export default ForgotPassword;