import React from "react";

const SelectID= ()=>{
    return(
     <div className="mx-auto w-full max-w-md p-7 bg-white shadow-2xl rounded-2xl my-[50px]">
      <div className="flex items-center space-x-2 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-700 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </div>

      <h1 className="text-xl mb-4 font-bold text-gray-800">Select an ID</h1>
      <p className="text-sm text-gray-500 mb-6">
        Select an ID
All the information you will provide for your KYC verification would be based on this ID
      </p>
      <div className="mb-4">
        <input type="radio" name="options" id="internationalPassport" value="internationalPassport"/>
        <label className="ml-2" htmlFor="internationalPassport">International Passport (Recomended)</label>
      </div>

      <div className="mb-4">
        <input type="radio" name="options" id="license" value="license"/>
        <label className="ml-2" htmlFor="license">Driver's License</label>
      </div>

      <div className="mb-4">
        <input type="radio" name="options" id="nationalID" value="nationalID"/>
        <label className="ml-2" htmlFor="nationalID">National ID Card</label>
      </div>

      <div className="mb-4">
        <input type="radio" name="options" id="voterCard" value="voterCard"/>
        <label className="ml-2" htmlFor="voterCard">Voter's Card</label>
      </div>
        <button className="w-full mt-[100px] py-3 bg-gray-300 text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors ">
             Continue
        </button>



      </div>

    );
};

export default SelectID;