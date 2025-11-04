import React from "react";
import Button from "../components/Button";


const TermsConditions=()=>{
    return(
        <div className="mx-auto w-full max-w-md p-6 bg-white shadow-2xl rounded-2xl my-[50px]">
            <div className="flex items-center space-x-2 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-gray-700 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            </div>

            <h1 className="text-xl font-bold mb-2 text-black">Before you begin</h1>
            <p className="text-sm text-gray-600 mb-8">We value transparency. Please review and agree to our <strong>Terms & Conditions</strong> and <strong>Privacy Policy</strong> before proceeding</p>


            <div className="mt-[300px] flex items-center gap-2">
                <p><span className="h-4 w-4 bg-gray-200 inline-block mr-3"></span>I agree to Goldenia’s <strong>Terms & Conditions</strong> and <strong>Privacy Policy</strong></p>

            </div>

            <div className="w-full mt-5">
                <Button label="Create Account"/>
            </div>


        </div>

    );
};

export default TermsConditions;