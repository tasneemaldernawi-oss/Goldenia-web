import React, { useState } from "react";
import HeaderPassword from '../components/headerPassword';
import SkipButton from "../components/PreviousButton";

const ForgotPassword = () => {
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
    <div className='bg-[#110070] p-4'>
      <HeaderPassword />

      <div className="mx-auto w-full max-w-md p-6 bg-[#110070] shadow-2xl rounded-2xl my-[50px] border-[1px] border-[#2000D4] h-[580px]">

        <div className="flex items-center space-x-2 mb-6">
          <SkipButton />
        </div>

        <h1 className="text-xl mb-4 font-bold text-white text-center">Reset your Password</h1>
        <p className="text-sm text-gray-400 mb-6 text-center">
          Enter your registered email or phone number and we will send you a reset code
        </p>

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

        <div className="w-full bg-[#110070]    overflow-hidden transition-all duration-300 text-white">

          {isPhoneActive ? (
            <div className="flex items-center w-full">
              <button
                onClick={() => setShowCountryOverlay(true)}
                className="p-4 bg-transparent text-sm border border-gray-300 rounded-lg text-white"
              >
                {countryCode} ▼
              </button>

              <input
                type="tel"
                placeholder="123 456 7890"
                className="flex-grow p-4 text-sm bg-transparent focus:outline-none border border-gray-300 rounded-lg ml-2"
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

        <p className="text-gray-400 text-sm text-center mt-2">
          Enter your registered email or phone number and we will send you a reset code
        </p>

        <button className="w-full mt-[130px] py-3 bg-[#F0BE1F] text-black font-semibold rounded-lg shadow-md hover:bg-gray-100">
          Continue
        </button>

      </div>

      {showCountryOverlay && (
        <div className="fixed inset-0 flex items-center justify-center z-50">

          <div
            onClick={() => setShowCountryOverlay(false)}
            className="absolute inset-0 bg-black opacity-25"
          />

          <div className="relative bg-[#110070] p-6 w-80 rounded-xl shadow-xl">
            <h2 className="text-white text-lg mb-4 text-center font-bold">
              Choose your country code
            </h2>

            <div className="relative mb-4 p-3">
              <input
                type="text"
                placeholder="Search your country or code"
                className="w-full p-2 pl-9 rounded-md bg-transparent border border-gray-500 text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <svg
                className="absolute left-5 top-1/2 -translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke="#ffffff"
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
                    className="w-full text-left p-2 bg-[#09006A] text-white hover:bg-[#12008E] flex justify-between items-center"
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

export default ForgotPassword;
