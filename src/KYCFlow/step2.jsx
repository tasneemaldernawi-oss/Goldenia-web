import React from 'react';
import ProgressBar from '../components/ProgressBar'; // Adjust path if needed

const Step2 = () => {
  const currentStep = 2;

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
        <h2 className="text-xl font-semibold mb-3 text-center">Upload Your ID</h2>
        <p className='text-md text-center text-gray-700 mb-4'>Please align your ID within the frame. We’ll verify it within a few minutes</p>

        <div className='h-[350px] w-[250px] bg-gray-400 mx-auto'>

        </div>
         
           

          {/* Continue Button */}
          <div className="pt-6">
                 <button className="w-full  py-3 bg-gray-300 text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors ">
                  The image is blurry
                </button>
          </div>
        
      </div>
    </div>

  );
};

export default Step2;