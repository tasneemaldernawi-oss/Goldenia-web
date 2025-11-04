import React from "react";

const SkipButton =({onClick})=>{
    return(
        <button onClick={onClick} className="absolute top-6 right-6 text-gray-600 text-sm font-medium flex items-center gap-1 hover:text-gray-800">

         Skip for now →
        </button>
    )
}

export default SkipButton;