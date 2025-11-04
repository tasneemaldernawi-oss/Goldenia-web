import React, { useState } from 'react';


const AccountInputToggle = () => {
  
  const [isPhoneActive, setIsPhoneActive] = useState(true);

  const handlePhoneClick = () => {
    setIsPhoneActive(true);
  };

  const handleEmailClick = () => {
    setIsPhoneActive(false);
  };

  return (
    
    <div className="mx-auto w-full max-w-md p-6 bg-white shadow-2xl rounded-2xl my-[50px]">
      
      <div className="flex items-center space-x-2 mb-6">
       
        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-gray-700 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
       
      </div>
       <h1 className="text-xl mb-4 font-bold text-gray-800">Create your Goldenia Account</h1> 
      <p className="text-sm text-gray-500 mb-6">Start your journey into the BPC ecosystem</p>

   
      <div className="flex -mx-4 border-b border-gray-200 mb-6">
        
        
        <div
          onClick={handlePhoneClick}
          className={`
            cursor-pointer px-4 py-3 text-center text-sm transition-all duration-200 w-1/2
            ${isPhoneActive 
              ? 'text-black-600 font-semibold border-b-2 border-black' 
              : 'text-gray-500 hover:text-gray-700' 
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
              ? 'text-black-600 font-semibold border-b-2 border-black' 
              : 'text-gray-500 hover:text-gray-700' 
            }
          `}
        >
          Email Address
        </div>
      </div>

      
      <div className="w-full bg-gray-50 border border-gray-300 rounded-lg overflow-hidden transition-all duration-300">
        
        {isPhoneActive ? (
          
          <div className="flex items-center w-full">
            
            <select className="p-3 bg-transparent text-sm focus:outline-none border-r border-gray-300">
              <option value="+234">+234</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>
            
            <input
              type="tel"
              placeholder="123 456 7890"
              className="flex-grow p-3 text-sm bg-transparent focus:outline-none border-none"
            />
          </div>
        ) : (
         
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full p-3 text-sm bg-transparent focus:outline-none border-none"
          />
        )}
      </div>


      <button className="w-full mt-[80px] py-3 bg-gray-300 text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors">
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
      
  
      <div className="mt-8 text-center text-sm">
          Already have an account? <a href="#" className="text-blue-600 font-semibold hover:underline">Log In</a>
      </div>
    </div>
  );
};

export default AccountInputToggle;