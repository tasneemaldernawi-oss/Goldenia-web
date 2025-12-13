import React from "react";
import Logo from '../assets/Logo.png'
import { Link } from "react-router-dom";


const HeaderLogin=()=>{
    return(
        <div>
        <div className="flex flex-row  justify-between bg-[#faf9f6] text-white p-2">
            <div>
                <img className="bg-[#464646] p-2 w-[90px] h-[90px] rounded-full" src={Logo} alt="Logo" />
            </div>

            
        <div className="mt-8 text-center text-md text-black">
          Don't have an account? <Link to='/signup/create' className="text-white bg-[#2500F8] ml-2  p-3 rounded-xl font-semibold hover:underline">Create an Account</Link>
      </div>
      

       </div>

       <div className="h-[0.2px] w-full bg-[#959595] mt-4"></div>
       </div>
        

    );
};


export default HeaderLogin;