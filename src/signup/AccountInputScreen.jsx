import React, { useState } from 'react';
import HeaderSignup from '../components/headerSignup';
import SkipButton from '../components/PreviousButton';
import { Link } from 'react-router-dom';

const AccountInputToggle = () => {
  
  const [isPhoneActive, setIsPhoneActive] = useState(true);

  const handlePhoneClick = () => {
    setIsPhoneActive(true);
  };

  const handleEmailClick = () => {
    setIsPhoneActive(false);
  };


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
    { name: "Saudi Arabia", code: "+966"},
  ];


  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.code.includes(searchTerm)
  );

  console.log(showCountryOverlay)

  return (
    <div className='bg-[#faf9f6] p-4'>
      <HeaderSignup />
      
      <div className="mx-auto w-full max-w-md h-[70vh] p-10 bg-[#ffffff] rounded-2xl border border-[#2000D4] rounded-2xl my-[50px]">

        <div className="flex items-center space-x-2 mb-6">
          
          <SkipButton to='' />
          
        </div>

        <h1 className="text-xl mb-4 font-bold text-black text-center">Create your Goldenia Account</h1>
        <p className="text-sm text-gray-400 mb-6 text-center">Start your journey into the BPC ecosystem</p>

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
                ? 'text-black font-semibold border-b-[3px] border-black'
                : 'text-gray-400 hover:text-gray-700'
              }
            `}
          >
            Email Address
          </div>
        </div>


        <div className="w-full bg-[#ffffff]  overflow-hidden transition-all duration-300">
          {isPhoneActive ? (
            <div className="flex items-center w-full bg-[#ffffff]">
              
              <button
                onClick={() => setShowCountryOverlay(true)}
                className='p-4 bg-transparent text-sm border border-gray-300 text-black rounded-lg'
                aria-label="Choose country code"
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
              className="w-full p-4 text-sm text-white focus:outline-none border border-gray-300 rounded-lg bg-[#ffffff]"
            />
          )}
        </div>


       <Link to='/signup/verify'>
       {/*note the hover bg   */ }
        <button className="w-full mt-[80px] py-3 bg-[#2500F8] text-white font-semibold rounded-full shadow-md hover:bg-[#001BB7] transition-colors">
          Continue
        </button>
        </Link>
        

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500 text-sm">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button className="w-full mb-3 py-3 border border-gray-300 bg-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors">
          Google
        </button>
        <button className="w-full py-3 border border-gray-300 bg-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors">
          Apple
        </button>
      </div>

     
     
     
      {showCountryOverlay && (
        <div className="fixed inset-0 flex items-center justify-center z-50" role="dialog" aria-modal="true">
          
          <div
            onClick={() => setShowCountryOverlay(false)}
            className="absolute inset-0 bg-black opacity-25"
          />

          
          <div className="relative bg-[#110070] p-6 w-80 rounded-xl   shadow-xl">
            <h2 className="text-white text-lg mb-4 text-center font-bold">Choose your country code</h2>

          
            <div className="relative mb-4  p-3">
              <input
                type="text"
                placeholder="Search your country or code"
                className="w-full p-2 pl-9 rounded-md bg-transparent border border-gray-500 text-white relative"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search countries"
              />
              <svg className="absolute left-5 top-1/2 -translate-y-1/2  " xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="#ffffff">
        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
       <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"/>
       <g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
            </svg>
            </div>

            
            <div className="max-h-60   overflow-y-scroll hide-scrollbar  rounded-lg ">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((c) => (
                  <button
                    type="button"
                    key={c.code}
                    onClick={() => {
                      setCountryCode(c.code);
                      setShowCountryOverlay(false);
                    }}
                    className="w-full text-left p-2 bg-[#09006A]  text-white cursor-pointer hover:bg-[#12008E] flex justify-between items-center"
                  >
                    <span className="flex items-center gap-2">
                      <span aria-hidden>{c.flag}</span>
                      <span>{c.name}</span>
                    </span>
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

export default AccountInputToggle;
