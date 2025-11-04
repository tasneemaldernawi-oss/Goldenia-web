import React from 'react';
import Button from "../components/Button";
import CircleImage from "../components/CircleImage";
import TextBlock from '../components/textBlock';


const SplashScreen=()=>{
    return(
        <div className="flex flex-col items-center justify-between min-h-screen gap-1 bg-white p-10">
            
            <div className='flex flex-col items-center gap-4 mt-[150px]'>
               <CircleImage size={120}/>
               <TextBlock heading="" paragraph="Own your wealth. Evolve your value."/>

            </div>
            <div className="flex flex-col items-center w-full">
                <p className='text-gray-400'>Powered by the Basic Point Coin (BPC) Network</p>
            </div>
        </div>
    );
    
};

export default SplashScreen;