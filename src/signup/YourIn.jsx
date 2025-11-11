
import React from 'react';

import Logo from '../assets/Logo.png';
import TextBlock from '../components/textBlock';
import HeaderSignup from '../components/headerSignup';



const YourIn=()=>{
    return(
        <div className='bg-[#110070] min-h-screen p-6' >

        <div className="mx-auto w-full max-w-md p-6 bg-[#110070] shadow-2xl rounded-2xl my-[50px] h-[540px] border-[1px] border-[#2000D4] mt-3">
            
            <div className='flex flex-col items-center gap-4 mt-[150px]'>
             <div >
                <img src={Logo} alt="Logo" />
            </div>

               <TextBlock heading="You’re in!" paragraph="Your account has been successfully created. Welcome to the world of real value."/>

            </div>

        </div>
        </div>
        
    );
    
};

export default YourIn;