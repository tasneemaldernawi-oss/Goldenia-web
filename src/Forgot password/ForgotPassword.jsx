import React, {useState} from "react";

const ForgotPassword=()=>{
    
      
      const [isPhoneActive, setIsPhoneActive] = useState(true);
    
      const handlePhoneClick = () => {
        setIsPhoneActive(true);
      };
    
      const handleEmailClick = () => {
        setIsPhoneActive(false);
      };
    return(
          <div className="mx-auto w-full max-w-md p-6 bg-white shadow-2xl rounded-2xl my-[50px]">
      
      <div className="flex items-center space-x-2 mb-6">
       
        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-gray-700 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
       
      </div>
       <h1 className="text-xl mb-4 font-bold text-gray-800">Reset your Password</h1> 
      <p className="text-sm text-gray-500 mb-6">Enter your registered email or phone number and we will send you a reset code</p>

   
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


      <button className="w-full mt-[300px] py-3 bg-gray-300 text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors">
          Continue
      </button>
      <p className="text-gray-400 text-sm text-center mt-2">Enter your registered email or phone number and we will send you a reset code</p>
      </div>

    );
};


export default ForgotPassword;