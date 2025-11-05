import React from 'react';
import ProgressBar from '../components/ProgressBar'; // Adjust path if needed

const Step1 = () => {
  const currentStep = 1;

  return (
     <div className=" mx-auto max-w-md bg-white flex flex-col items-center justify-start px-4 p-6 shadow-2xl rounded-2xl">
      {/* Top Section: Back Icon + Progress Bar */}
      <div className="flex items-center justify-center w-full max-w-sm mx-auto mb-6 space-x-4">
        {/* Back Icon */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </div>

        {/* Progress Bar */}
        <ProgressBar currentStep={currentStep} totalSteps={3} />
      </div>

      {/* Form Section */}
      <div className="mt-4 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-6 text-center">Tell Us About Yourself</h2>
        <p className='text-center text-gray-700 mb-2'>Please make sure your details match the information on your ID</p>

        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              defaultValue="Jane Doe"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Nationality */}
          <div>
            <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
              Nationality
            </label>
            <select
              id="nationality"
              name="nationality"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Select Nationality</option>
              <option value="Libyan">Libyan</option>
              <option value="Egyptian">Egyptian</option>
              <option value="Tunisian">Tunisian</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              placeholder="Enter your Street"
              className="mb-2 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Enter your City"
              className="mb-2 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Enter your Postal Code"
              className="block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Continue Button */}
          <div className="pt-6">
                 <button className="w-full  py-3 bg-gray-300 text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors ">
                  Continue
                </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Step1;