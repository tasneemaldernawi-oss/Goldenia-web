import React from "react";

import {ArrowRight} from "lucide-react";

const NextButton=({onClick}) =>{
    return(
        <button onClick={onClick} className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-all duration-200">
         <ArrowRight className="text-gray-700" size={20}/>
        </button>
    );
};

export default NextButton;