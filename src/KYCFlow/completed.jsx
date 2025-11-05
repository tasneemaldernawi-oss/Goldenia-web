import React from "react";
import SkipButton from "../components/skipButton";
import TextBlock from "../components/textBlock";

const CompletedKYC= () =>{
    return(
        <div className="relative flex flex-col items-center justify-between min-h-screen bg-white p-6">
            <SkipButton onClick/>
            <div className="flex flex-col items-center justify-center h-[40vh] gap-4 mt-[10%]">
                <div className="h-[40px] w-[40px] bg-gray-300 rounded">
                </div>
                <TextBlock heading="Verification Submitted" paragraph="Our team is reviewing your details. We’ll notify you within 5–10 minutes once your identity is verified"/>

            </div>

            <div className="w-[408px]">
                 <button className="w-full mt-[200px] py-3 bg-gray-300 text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors ">
                  Return to Dashboard
                </button>
                <p className="text-center pt-2 text-sm">You can continue exploring basic features while we verify your details</p>

            </div>

            
             


        </div>

    );
};


export default CompletedKYC;