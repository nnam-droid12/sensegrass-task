import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () =>{

    const [username, setUsername] = useState('');
     let forgotnavigate = useNavigate();

    const SubmitEmail = async () =>{
        try{
            const data = await Auth.forgotPassword(username);
            forgotnavigate('/newpassword')
            console.log(data)

        }catch(err){
            console.log('', err)
        }
    }

    return(
        <div className='sign-in'>
        <div>
         <input className='password-forgot'
         type='email'
         placeholder='Email'
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