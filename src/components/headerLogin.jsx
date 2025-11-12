import React from "react";
import Logo from '../assets/Logo.png'


const HeaderLogin=()=>{
    return(
        <div>
        <div className="flex flex-row  justify-between bg-[#110070] text-white p-2">
            <div>
                <img src={Logo} alt="Logo" />
            </div>

            
        <div className="mt-8 text-center text-md">
          Don't have an account? <a href="#" className="text-black bg-[#F0BE1F] ml-2  p-3 rounded font-semibold hover:underline">Create an Account</a>
      </div>
      

       </div>

       <div className="h-[0.2px] w-full bg-[#959595] mt-4"></div>
       </div>
        

    );
};


export default HeaderLogin;