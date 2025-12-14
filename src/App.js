// ./src/App.js
import React from 'react';
import Verification from './signup/Verification'
import AccountInputToggle from './signup/AccountInputScreen';
import CreatePassword from './signup/CreatePassword';
import TermsConditions from './signup/Terms&conditions';
import Terms from './signup/Terms';
import Privacy from './signup/Privacy';
import YourIn from './signup/YourIn';
import LoginScreen from './Login/LoginScreen';
import SwitchAccount from './Login/ReturningUser';
import WelcomBack from './Login/WelcomBack';
import ForgotPassword from './Forgot password/ForgotPassword';
import ResetPassword from './Forgot password/ResetPassword';
import PasswordResetSuccess from './Forgot password/PasswordResetSuccess';

import HeaderSignup from './components/headerSignup';
import { Routes, Route } from 'react-router-dom';
import VerificationEmail from './signup/verficationEmail';



function App() {
  return (
     
   <Routes>
     <Route path='/signup/create' element={<AccountInputToggle/>}/>
     <Route path='/signup/verify' element={<Verification/>}/>
     <Route path='/signup/verifyEmail' element={<VerificationEmail/>}/>
     <Route path='/signup/secure' element={<CreatePassword/>}/>
     <Route path='/signup/welcome' element={<YourIn/>}/>
     <Route path='/signup/termsandconditions' element={<TermsConditions/>}/>
     <Route path='/login' element={<LoginScreen/>}/>
     <Route path='/forgotpassword' element={<ForgotPassword/>}/>
     <Route path='/resetpassword' element={<ResetPassword/>}/>
   </Routes>


      
   
  );
}

export default App;