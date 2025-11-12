// ./src/App.js
import React from 'react';
import Verification from './signup/Verification';
import AboutScreen1 from './welcomeflow/AboutScreen';
import Welcome from './welcomeflow/welcomeScreen';
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
import IntrotoKYC from './KYCFlow/intotoKYC';
import SelectID from './KYCFlow/selectID';
import ProgressStepper from './components/ProgressBar';
import Step1 from './KYCFlow/step1';
import Step2 from './KYCFlow/step2';
import Step3 from './KYCFlow/step3';
import CompletedKYC from './KYCFlow/completed';
import HeaderSignup from './components/headerSignup';


function App() {
  return (
   
    
    <div >
      <AccountInputToggle/>
      <LoginScreen/>
      <CreatePassword/>
      <WelcomBack/>
      <ForgotPassword/>
      <ResetPassword/>
      <PasswordResetSuccess/>


      
     
     
 
     

    
     


      
      
   
    </div>
   
  );
}

export default App;