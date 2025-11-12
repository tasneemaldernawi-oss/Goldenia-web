import React, {useState} from "react";
import HeaderPassword from '../components/headerPassword';
import SkipButton from "../components/PreviousButton";

const ForgotPassword=()=>{
    
      
      const [isPhoneActive, setIsPhoneActive] = useState(true);
    
      const handlePhoneClick = () => {
        setIsPhoneActive(true);
      };
    
      const handleEmailClick = () => {
        setIsPhoneActive(false);
      };
    return(
       <div className='bg-[#110070] p-4 ' >
       <HeaderPassword/> 
        <div className="mx-auto w-full max-w-md p-6 bg-[#110070] shadow-2xl rounded-2xl my-[50px] border-[1px] border-[#2000D4] h-[580px]">
      
      <div className="flex items-center space-x-2 mb-6">
        <SkipButton/>
       
      </div>
       <h1 className="text-xl mb-4 font-bold text-white text-center">Reset your Password</h1> 
      <p className="text-sm text-gray-400 mb-6 text-center">Enter your registered email or phone number and we will send you a reset code</p>

   
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

      
      <div className="w-full bg-[#110070] border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 text-white">
        
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
      <p className="text-gray-400 text-sm text-center mt-2">Enter your registered email or phone number and we will send you a reset code</p>


      <button className="w-full mt-[130px] py-3 bg-[#F0BE1F] text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors">
          Continue
      </button>
      
      </div>
    </div>

    );
};


export default ForgotPassword;