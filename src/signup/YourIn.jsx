

import React from 'react';

import CircleImage from "../components/CircleImage";
import TextBlock from '../components/textBlock';


const YourIn=()=>{
    return(
        <div className="flex flex-col items-center justify-between min-h-screen gap-1 bg-white p-10">
            
            <div className='flex flex-col items-center gap-4 mt-[150px]'>
               <CircleImage size={120}/>
               <TextBlock heading="You’re in!" paragraph="Your account has been successfully created. Welcome to the world of real value."/>

            </div>

        </div>
    );
    
};

export default YourIn;