import React, { useState } from "react";
import Button from "../components/Button";
import HeaderSignup from "../components/headerSignup";
import SkipButton from "../components/PreviousButton";

const TermsConditions = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="bg-[#110070] p-4 pb-8">
      <HeaderSignup />
      <div className="mx-auto w-full max-w-md p-6 bg-[#110070] shadow-2xl rounded-2xl my-[50px] h-[542px] border-[1px] border-[#2000D4]">
        <div className="flex items-center space-x-2 mb-6">
          <SkipButton />
        </div>

        <h1 className="text-xl font-bold mb-2 text-white text-center">
          Before you begin
        </h1>
        <p className="text-sm text-gray-300 mb-8 text-center">
          We value transparency. Please review and agree to our{" "}
          <strong>Terms & Conditions</strong> and{" "}
          <strong>Privacy Policy</strong> before proceeding
        </p>

        {/* Checkbox */}
        <div className="mt-[180px] flex items-center gap-2 pl-5">
          <label className=" text-gray-300 cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="accent-[#F0BE1F] h-4 w-4 mr-3"
            />
             I agree to Goldenia’s{" "}
            <strong>Terms & Conditions</strong> and{" "}
            <strong>Privacy Policy</strong>
          </label>
        </div>

        {/* Continue Button */}
        <div className="w-full mt-5">
          <button
            disabled={!isChecked}
            className={`w-full py-3 rounded-lg font-semibold shadow-md transition-colors ${
              isChecked
                ? "bg-[#F0BE1F] text-black hover:bg-yellow-300"
                : "bg-gray-500 text-gray-300 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
