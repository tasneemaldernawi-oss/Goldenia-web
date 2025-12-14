import React, { useRef, useState } from "react";
import HeaderLogin from '../components/headerLogin';
import SkipButton from "../components/PreviousButton";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef(null);

  const togglePasswordVisibility = () => {
    setShowPassword((current) => !current);
  };

  const [isPhoneActive, setIsPhoneActive] = useState(true);
  const handlePhoneClick = () => setIsPhoneActive(true);
  const handleEmailClick = () => setIsPhoneActive(false);


  const [showCountryOverlay, setShowCountryOverlay] = useState(false);
  const [countryCode, setCountryCode] = useState("+234");
  const [searchTerm, setSearchTerm] = useState("");


  const countries = [
    { name: "Germany", code: "+49" },
    { name: "United States", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "Libya", code: "+218" },
    { name: "Nigeria", code: "+234" },
    { name: "UAE", code: "+971" },
    { name: "Saudi Arabia", code: "+966" },
  ];

  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.code.includes(searchTerm)
  );

  return (
    <div className='bg-[#faf9f6] p-4'>
      <HeaderLogin />

      <div className="mx-auto w-full max-w-md p-10 bg-[#ffffff] shadow-2xl rounded-2xl my-[50px] border-[1px] border-[#2000D4]">

        <div className="flex items-center space-x-2 mb-6">
          <SkipButton />
        </div>

        <h1 className="text-xl mb-3 font-bold text-black text-center">Welcome back to Goldenia</h1>
        <p className="text-sm text-gray-800 mb-6 text-center">Your gateway to a world of real value</p>

        <div className="flex -mx-4 border-b border-gray-200 mb-6">
          <div
            onClick={handlePhoneClick}
            className={`
              cursor-pointer px-4 py-3 text-center text-sm transition-all duration-200 w-1/2
              ${isPhoneActive
                ? 'text-black font-bold border-b-[3px] border-black'
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
                ? 'text-black font-bold border-b-[3px] border-black'
                : 'text-gray-400 hover:text-gray-700'
              }
            `}
          >
            Email Address
          </div>
        </div>

      
        <div className="w-full bg-gray-50  overflow-hidden transition-all duration-300">

          {isPhoneActive ? (
            <div className="flex items-center w-full bg-white">

              
              <button
                onClick={() => setShowCountryOverlay(true)}
                className="p-4 bg-transparent text-sm border border-gray-300 text-black rounded-lg"
              >
                {countryCode} ▼
              </button>

              <input
                type="tel"
                placeholder="123 456 7890"
                className="flex-grow p-4 text-sm bg-transparent text-black focus:outline-none border border-gray-300 rounded-lg ml-2"
              />
            </div>
          ) : (
            <input
              type="email"
              placeholder="example@domain.com"
              className="w-full p-3 text-sm focus:outline-none border rounded-lg bg-white text-white"
            />
          )}
        </div>

        
        <div className="flex items-center w-full border border-gray-300 rounded-lg mt-3 bg-white text-black">
          <input
            ref={passwordRef}
            type={showPassword ? "text" : "password"}
            placeholder="......."
            className="flex-grow p-3 text-sm bg-transparent focus:outline-none border-none"
          />
          <i
            onClick={togglePasswordVisibility}
            className={`far cursor-pointer mr-[20px] text-black ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
          ></i>
        </div>

       <Link to='/forgotpassword'>
        <button className="float-right mt-2 mb-5 mr-1 text-sm text-[#2500F8] font-bold">Forgot Password?</button>
        </Link>

        <Link to='/signup/verify'>
        <button className="w-full mt-8 py-3 bg-[#2500F8] text-white font-semibold rounded-full shadow-md hover:bg-[#001BB7]">
          Continue
        </button>
        </Link>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button className="w-full mb-3 py-3 border border-gray-300 bg-gray-300 text-gray-700 font-medium rounded-full">
          Google
        </button>

        <button className="w-full py-3 border border-gray-300 bg-gray-300 text-gray-700 font-medium rounded-full">
          Apple
        </button>

      </div>

      
      {showCountryOverlay && (
        <div className="fixed inset-0 flex items-center justify-center z-50">

         
          <div
            onClick={() => setShowCountryOverlay(false)}
            className="absolute inset-0 bg-black opacity-25"
          />

          
          <div className="relative bg-[#ffffff] p-6 w-80 rounded-xl shadow-xl">
            <h2 className="text-black text-lg mb-4 text-center font-bold">Choose your country code</h2>

            
            <div className="relative mb-4 p-3">
              <input
                type="text"
                placeholder="Search your country or code"
                className="w-full p-2 pl-9 rounded-md bg-transparent border border-gray-500 text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <svg
                className="absolute left-5 top-1/2 -translate-y-1/2 f"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke="black"
                fill="none"
              >
                <path
                  d="M16.6 16.6L21 21M19 11A8 8 0 1 1 3 11A8 8 0 0 1 19 11Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="max-h-60 overflow-y-scroll hide-scrollbar rounded-lg">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => {
                      setCountryCode(c.code);
                      setShowCountryOverlay(false);
                    }}
                    className="w-full text-left p-2 bg-white text-black hover:bg-[#2500F8] hover:text-white flex justify-between items-center"
                  >
                    <span>{c.name}</span>
                    <span className="font-mono">{c.code}</span>
                  </button>
                ))
              ) : (
                <p className="text-center text-gray-400 py-2">No results</p>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default LoginScreen;
