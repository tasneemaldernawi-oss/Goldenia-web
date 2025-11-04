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

function App() {
  return (
   
    
    <div >
     
     
       <AboutScreen1/>
       <Welcome/>
       <AccountInputToggle/> 

      <Verification/>
      <CreatePassword/>
      <TermsConditions/>
      <Terms/>
      <Privacy/>
      <YourIn/>
      <LoginScreen/>
      <SwitchAccount/>
      <WelcomBack/>
      <ForgotPassword/>
      <ResetPassword/>
      <PasswordResetSuccess/>


      
      
   
    </div>
   
  );
}

export default App;