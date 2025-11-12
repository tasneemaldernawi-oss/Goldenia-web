import React, { useState, useEffect } from "react";
import SkipButton from "../components/PreviousButton";
import HeaderSignup from "../components/headerSignup";


const Button = ({ label, disabled }) => (
    <button 
        className={`w-full py-3 font-semibold rounded-lg transition-colors ${
            disabled 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-[#F0BE1F] text-black hover:bg-yellow-300'
        }`}
        disabled={disabled}
    >
        {label}
    </button>
);



const VerificationEmail = () => {
  
    const CODE_LENGTH = 6;

    const [code, setCode] = useState(new Array(CODE_LENGTH).fill(''));
    
    
    const [seconds, setSeconds] = useState(30);

   
    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds > 0) {
                    return prevSeconds - 1;
                }
                clearInterval(timer); 
                return 0;
            });
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);

    
    const formattedTime = `00:${seconds < 10 ? '0' : ''}${seconds}`;
    const canResend = seconds === 0;
    
    
    const isCodeComplete = code.every(digit => digit !== '');


    const handleChange = (e, index) => {
        const value = e.target.value;
        if (!/^\d*$/.test(value)) return;
        const newCode = [...code];
        newCode[index] = value.slice(-1); 
        setCode(newCode);
    };


    return (
      <div className='bg-[#110070] p-4 pb-8'>  
      <HeaderSignup/>  
        <div className="mx-auto w-full max-w-md p-6 bg-white shadow-2xl border-[1px] border-[#2000D4] rounded-2xl my-[50px] bg-[#110070] h-[542px] "> 
            <div className="flex items-center space-x-2 mb-6">
              <SkipButton/>
            </div>

            <h1 className="text-xl font-bold mb-2 text-white text-center">Verify your Identity</h1>
            <p className="text-sm text-gray-400 mb-8 text-center">Enter the 6-digit code sent to ex***@domain.com</p>
            
            
            <div className="flex justify-between space-x-2">
             
                {code.map((digit, index) => (
                    <input
                        key={index}
                        type="tel" 
                        maxLength="1" 
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        className="w-10 h-14 text-center text-xl font-medium rounded-lg border-2 border-gray-400 focus:border-white focus:ring-0 transition-colors bg-[#110070] caret-white text-white"
                        style={{ outline: 'none' }} 
                    />
                ))}
            </div>

            <p className="text-sm text-gray-300 mt-8 text-center">
                Didn't receive the code? 
                <button 
                    onClick={() => { if (canResend) setSeconds(30); }}
                    className={`ml-1 font-medium transition-colors ${
                        canResend ? 'text-[#F0BE1F] hover:text-blue-700' : 'text-gray-400 cursor-default'
                    }`}
                    disabled={!canResend}
                >
                    Resend in {formattedTime}
                </button>
            </p>
            
            
            <div className="w-full mt-[180px] ">
                <Button 
                    label="Verify" 
                    disabled={!isCodeComplete} 
                />
            </div>
            
        </div>
        </div>
    );
};

export default VerificationEmail;