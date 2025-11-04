import React from "react";
import TextBlock from "../components/textBlock";


const PasswordResetSuccess=()=>{
    return(
         <div className=" mx-auto w-full max-w-md p-6 bg-white shadow-2xl rounded-2xl my-[50px]">

            <div className="flex flex-col items-center justify-center h-[40vh] gap-4 ">
                <div className="h-[40px] w-[40px] bg-gray-300 rounded">
                </div>
                <TextBlock heading="Secure your account" paragraph="Create a strong password for your Goldenia account"/>

            </div>

             <button className="w-full mt-[200px] py-3 bg-gray-300 text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors">
              Continue
             </button>

         </div>

    );
};

export default PasswordResetSuccess;