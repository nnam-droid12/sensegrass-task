import React, { useState, useEffect} from 'react';
import Amplify, { Auth } from 'aws-amplify';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/Signin/SignIn';
import SignUp from './components/Signup/SignUp';
import ConfirmSignUp from './components/confirmsignup/ConfirmSignup';
import ForgotPassword from './components/forgotpassword/ForgotPassword';
import NewPasswordReset from './components/newpasswordreset/NewPasswordReset'
import awsconfig from './aws-exports';
// import { withAuthenticator } from '@aws-amplify/ui-react';
import WelcomePage from './components/welcomepage/Welcome';

Amplify.configure(awsconfig)

function App() {

  const [loggedin, setLoggedin] = useState(false);

  useEffect(() =>{
    CheckLoggedInState();
  }, [])

  const CheckLoggedInState = () =>{
    Auth.currentAuthenticatedUser().then(() =>{
      setLoggedin(true)
    }).catch(() =>{
      setLoggedin(false);
    })
  }
  
    return(
    <div className="App">
       <Routes>
         <Route path='/' element={<SignIn />} />
         <Route path='/welcome' element={<WelcomePage />} />
         <Route path='signup' element={<SignUp />} />
         <Route path='/confirmsignup' element={<ConfirmSignUp />} />
         <Route path='/forgotpassword' element={<ForgotPassword />} />
         <Route path='/newpassword' element={<NewPasswordReset />} />
      </Routes>
      
    </div>
    );
  
}

export default App;
