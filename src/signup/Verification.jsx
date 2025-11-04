import React, { useState, useEffect } from "react";


const Button = ({ label, disabled }) => (
    <button 
        className={`w-full py-3 font-semibold rounded-lg transition-colors ${
            disabled 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-black text-white hover:bg-gray-800'
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
        <div className="mx-auto w-full max-w-md p-6 bg-white shadow-2xl rounded-2xl my-[50px]"> 
            <div className="flex items-center space-x-2 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-gray-700 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            </div>

            <h1 className="text-xl font-bold mb-2 text-gray-800">Verify your Identity</h1>
            <p className="text-sm text-gray-500 mb-8">Enter the 6-digit code sent to +234 *** 6789</p>
            
            
            <div className="flex justify-between space-x-2">
             
                {code.map((digit, index) => (
                    <input
                        key={index}
                        type="tel" 
                        maxLength="1" 
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        className="w-10 h-14 text-center text-xl font-bold rounded-lg border-2 border-gray-300 focus:border-black focus:ring-0 transition-colors"
                        style={{ outline: 'none' }} 
                    />
                ))}
            </div>

            <p className="text-sm text-gray-500 mt-8 text-center">
                Didn't receive the code? 
                <button 
                    onClick={() => { if (canResend) setSeconds(30); }}
                    className={`ml-1 font-bold transition-colors ${
                        canResend ? 'text-blue-600 hover:text-blue-700' : 'text-gray-400 cursor-default'
                    }`}
                    disabled={!canResend}
                >
                    Resend in {formattedTime}
                </button>
            </p>
            
            
            <div className="w-full mt-[300px]">
                <Button 
                    label="Verify" 
                    disabled={!isCodeComplete} 
                />
            </div>
            
        </div>
    );
};

export default Verification;