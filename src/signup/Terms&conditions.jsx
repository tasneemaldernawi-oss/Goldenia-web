import React, { useState } from "react";
import Button from "../components/Button";
import HeaderSignup from "../components/headerSignup";
import SkipButton from "../components/PreviousButton";

const TermsConditions = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="bg-[#faf9f6] p-4 pb-8">
      <HeaderSignup />
      <div className="mx-auto w-full max-w-md p-6 bg-[#fffff] shadow-2xl rounded-2xl my-[50px] h-[400px] border-[1px] border-[#2000D4]">
        <div className="flex items-center space-x-2 mb-6">
          <SkipButton />
        </div>

        <h1 className="text-xl font-bold mb-2 text-black text-center">
          Before you begin
        </h1>
        <p className="text-sm text-gray-800  text-center">
          We value transparency. Please review and agree to our{" "}
          <strong>Terms & Conditions</strong> and{" "}
          <strong>Privacy Policy</strong> before proceeding
        </p>

        {/* Checkbox */}
        <div className="mt-[80px] flex items-center gap-2 pl-5">
          <label className=" text-black cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="accent-[#2500F8] h-4 w-4 mr-3"
            />
             I agree to Goldenia’s{" "}
            <strong>Terms & Conditions</strong> and{" "}
            <strong>Privacy Policy</strong>
          </label>
        </div>

        {/* Continue Button */}
        <div className="w-full mt-3">
          <button
            disabled={!isChecked}
            className={`w-full py-3 rounded-full font-semibold shadow-md transition-colors ${
              isChecked
                ? "bg-[#2500F8] text-white hover:bg-blue-300"
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
