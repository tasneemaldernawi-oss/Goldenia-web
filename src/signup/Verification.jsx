import React, { useState, useEffect } from "react";
import SkipButton from "../components/PreviousButton";
import HeaderSignup from "../components/headerSignup";
import { Link } from "react-router-dom";


const Button = ({ label, disabled }) => (
    <button 
        className={`w-full py-3 font-semibold rounded-full transition-colors ${
            disabled 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-[#2500F8] text-white hover:bg-yellow-300'
        }`}
        disabled={disabled}
    >
        {label}
    </button>
);



const Verification = () => {
  
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
      <div className='bg-[#faf9f6] p-4 pb-8'>  
      <HeaderSignup/>  
        <div className="mx-auto w-full max-w-md p-6 bg-[#ffffff] shadow-2xl border-[1px] border-[#2000D4] rounded-2xl my-[50px] bg-[#110070] h-[400px] "> 
           
            <div className="flex items-center space-x-2 mb-6">
            <Link to='/signup/create'>
              <SkipButton/>
            </Link>
            </div>
            

            <h1 className="text-xl font-bold mb-2 text-black text-center">Verify your Identity</h1>
            <p className="text-sm text-gray-800 mb-8 text-center">Enter the 6-digit code sent to +234 *** 6789</p>
            
            
            <div className="flex justify-between space-x-2">
             
                {code.map((digit, index) => (
                    <input
                        key={index}
                        type="tel" 
                        maxLength="1" 
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        className="w-10 h-14 text-center text-xl font-medium rounded-lg border-2 border-gray-400 focus:border-black focus:ring-0 transition-colors bg-[#ffffff] caret-white text-black"
                        style={{ outline: 'none' }} 
                    />
                ))}
            </div>

            <p className="text-sm text-black mt-8 text-center">
                Didn't receive the code? 
                <button 
                    onClick={() => { if (canResend) setSeconds(30); }}
                    className={`ml-1 font-medium transition-colors ${
                        canResend ? 'text-gray-400' : 'text-blue-700  cursor-default'
                    }`}
                    disabled={!canResend}
                >
                    Resend in {formattedTime}
                </button>
            </p>
            
            <Link to='/signup/secure'>
            <div className="w-full mt-[40px] ">
                <Button 
                    label="Verify" 
                    disabled={!isCodeComplete} 
                />
            </div>
            </Link>
            
            
        </div>
        </div>
    );
};

export default Verification;