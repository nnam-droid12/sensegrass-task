import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const ConfirmSignup = () =>{

        const [number, setNumber] = useState(''); 
        const [username, setUsername] = useState('');

        let confirmnavigate = useNavigate();
        const ConfirmSubmit = async () =>{
            try{
                await Auth.confirmSignUp(username, number);
                confirmnavigate('/');

            }catch(error){
                console.log('error confirming user', error)
            }
        }

    return (
    <div className='confirm'>
      <input className='confirm-code'
      name='number'
      value={number}
      placeholder='enter code send to your mail'
      onChange={(e) => setNumber(e.target.value)}
       />
       <input className='confirm-username'
      name='email'
      value={username}
      placeholder='email'
      onChange={(e) => setUsername(e.target.value)}
       />
       <button className='confirm-submit' onClick={ConfirmSubmit}>Verify email</button>
    </div>
    );
}

export default ConfirmSignup;