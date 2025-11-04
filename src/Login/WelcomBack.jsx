import React from "react";
import CircleImage from "../components/CircleImage";
import TextBlock from '../components/textBlock';


const WelcomBack=()=>{
    return(
        <div className="flex flex-col items-center justify-between min-h-screen gap-1 bg-white p-10">
            
            <div className='flex flex-col items-center gap-4 mt-[150px]'>
               <CircleImage size={120}/>
               <TextBlock heading="Welcome Back!" paragraph=""/>
               <div className="h-10 w-10 bg-gray-200 ">


               </div>
               <p className="text-gray-400">Loading your assets</p>

            </div>

        </div>
    );
    
};

export default WelcomBack;
