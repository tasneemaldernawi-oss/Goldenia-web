import React from "react";
import SkipButton from "../components/skipButton";
import TextBlock from "../components/textBlock";

const IntrotoKYC= () =>{
    return(
        <div className="relative flex flex-col items-center justify-between min-h-screen bg-white p-6">
            <SkipButton onClick/>
            <div className="flex flex-col items-center justify-center h-[40vh] gap-4 mt-[10%]">
                <div className="h-[40px] w-[40px] bg-gray-300 rounded">
                </div>
                <TextBlock heading="Let’s Get You Verified" paragraph="We’ll need a few details and a valid ID to complete your verification. It only takes a few minutes"/>

            </div>

            <div className="w-[408px]">
                 <button className="w-full mt-[200px] py-3 bg-gray-300 text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors ">
                  Start KYC Verification
                </button>
                <p className="text-center pt-2">Your information is encrypted and stored securely</p>

            </div>

            
             


        </div>

    );
};


export default IntrotoKYC;