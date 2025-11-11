import React from "react";


const SkipButton =({onClick})=>{
    return(
        <button onClick={onClick} className="text-white text-md  flex items-center gap-1 hover:text-gray-800 hover:svg-gray group transition duration-200">
         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className="transition duration-200">
        <path d="M14.4374 16.0009L21.0371 9.40124L19.1515 7.51562L10.6662 16.0009L19.1515 24.4861L21.0371 22.6005L14.4374 16.0009Z" className="full-white group-hover:fill-gray-800 transition duration-200" fill="white"/>
         </svg> Back
        </button>
    )
}

export default SkipButton;