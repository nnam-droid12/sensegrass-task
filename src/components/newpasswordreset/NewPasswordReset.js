import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () =>{

    const [username, setUsername] = useState('');
    const [number, setNumber] = useState('');
    const [newpassword, setNewpassword] = useState('');
    let newnavigate = useNavigate();

    const SubmitNewpassword = async () =>{
        try{
            const password_data = await Auth.forgotPasswordSubmit(username, number, newpassword);
            newnavigate('/');
            console.log(password_data)

        }catch(err){
            console.log('', err)
        }
    }

    return(
        <div className='sign-in'>
         <div classNme='signin-header'>
         <h4 className='header-text'>Password Reset</h4>
         <div className='input-form'>
         <input className='password-username'
         name='email'
         placeholder='email'
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         />
         <br></br>
         <br></br>
          <input className='password-number'
         name='number'
         placeholder='code sent to mail'
         value={number}
         onChange={(e) => setNumber(e.target.value)}
         />
         <br></br>
         <br></br>
          <input className='password-newpassword'
         name='password'
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