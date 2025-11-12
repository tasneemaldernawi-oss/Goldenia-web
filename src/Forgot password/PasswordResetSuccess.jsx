import React from "react";
import TextBlock from "../components/textBlock";
import HeaderPassword from "../components/headerPassword";
import Success from '../assets/Success.png';


const PasswordResetSuccess=()=>{
    return(
        <div className="bg-[#110070] p-4 ">
            <HeaderPassword/>
         <div className=" mx-auto w-full max-w-md p-6 bg-[#110070] shadow-2xl rounded-2xl my-[30px] h-[400px] border-[1px] border-[#2000D4]">

            <div className="flex flex-col items-center justify-center h-[30vh] gap-4 ">
                <div className="h-[5px] w-[50px] rounded pb-[50px]">
                    <img src= {Success} alt="" />
                </div>
                <TextBlock heading="Password Reset Successful!" paragraph="You can log in with your new password"/>

            </div>

             <button className="w-full  py-3 bg-[#F0BE1F] text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors">
              Return to Log in
             </button>

         </div>
         </div>

    );
};

export default PasswordResetSuccess;