import React, { useState } from 'react';
import HeaderSignup from '../components/headerSignup';
import SkipButton from '../components/PreviousButton';


const AccountInputToggle = () => {
  
  const [isPhoneActive, setIsPhoneActive] = useState(true);

  const handlePhoneClick = () => {
    setIsPhoneActive(true);
  };

  const handleEmailClick = () => {
    setIsPhoneActive(false);
  };

  return (
     <div className='bg-[#110070] p-4 '>  
      <HeaderSignup/>  
    <div className="mx-auto w-full max-w-md h-[70vg] p-10 bg-[#110070] shadow-2xl border-[1px] border-[#2000D4] rounded-2xl my-[50px]">
      
      <div className="flex items-center space-x-2 mb-6">
        
         <SkipButton/>
       
       
      </div>
      
       <h1 className="text-xl mb-4 font-bold text-white">Create your Goldenia Account</h1> 
      <p className="text-sm text-[#CACACA] mb-6">Start your journey into the BPC ecosystem</p>

   
      <div className="flex -mx-4 border-b border-gray-200 mb-6">
        
        
        <div
          onClick={handlePhoneClick}
          className={`
            cursor-pointer px-4 py-3 text-center text-sm transition-all duration-200 w-1/2
            ${isPhoneActive 
              ? 'text-[#F0BE1F] font-semibold border-b-[3px] border-[#F0BE1F]' 
              : 'text-gray-400 hover:text-gray-700' 
            }
          `}
        >
          Phone Number
        </div>
        
       
        <div
          onClick={handleEmailClick}
          className={`
            cursor-pointer px-4 py-3 text-center text-sm transition-all duration-200 w-1/2
            ${!isPhoneActive 
              ? 'text-[#F0BE1F] font-semibold border-b-[3px] border-[#F0BE1F]' 
              : 'text-gray-400 hover:text-gray-700' 
            }
          `}
        >
          Email Address
        </div>
      </div>

      
      <div className="w-full bg-gray-50 border border-gray-300 rounded-lg overflow-hidden transition-all duration-300">
        
        {isPhoneActive ? (
          
          <div className="flex items-center w-full bg-[#110070]">
            
            <select className="p-3 bg-transparent text-sm focus:outline-none border-r border-gray-300 text-white bg-[#110070]">
              <option value="+234">+234</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>
            
            <input
              type="tel"
              placeholder="123 456 7890"
              className="flex-grow p-3 text-sm bg-transparent focus:outline-none border-none "
            />
          </div>
        ) : (
         
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full p-3 text-sm bg-transparent focus:outline-none border-none bg-[#110070] "
          />
        )}
      </div>


      <button className="w-full mt-[80px] py-3 bg-[#F0BE1F] text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors">
          Continue
      </button>

     
      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-500 text-sm">Or continue with</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <button className="w-full mb-3 py-3 border border-gray-300 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
          Google
      </button>
      <button className="w-full py-3 border border-gray-300 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
          Apple
      </button>
      </div>
      
  

    </div>
  );
};

export default AccountInputToggle;