import React, { useState } from "react";

const PhoneInput = () => {
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
    <>
      {/* PHONE INPUT */}
      <div className="w-full bg-[#0D0056] border border-gray-300 rounded-lg overflow-hidden">
        <div className="flex items-center w-full bg-[#110070]">
          <button
            onClick={() => setShowCountryOverlay(true)}
            className="p-4 bg-transparent text-sm border-r border-gray-300 text-white"
          >
            {countryCode} ▼
          </button>

          <input
            type="tel"
            placeholder="123 456 7890"
            className="flex-grow p-3 text-sm bg-transparent text-white focus:outline-none"
          />
        </div>
      </div>

      {/* COUNTRY OVERLAY */}
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

            {/* SEARCH INPUT */}
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
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
              >
                <path
                  d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* COUNTRY LIST */}
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
    </>
  );
};

export default PhoneInput;
