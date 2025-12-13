
import React from 'react';

import Logo from '../assets/Logo.png';
import TextBlock from '../components/textBlock';


const YourIn=()=>{
    return(
        <div className='bg-[#faf9f6] min-h-screen p-6' >

        <div className="mx-auto w-full max-w-md p-6 bg-[#fffff] shadow-2xl rounded-2xl my-[100px] h-[400px] border-[1px] border-[#2000D4] ">
            
            <div className='flex flex-col items-center gap-4 mt-[30px]'>
             <div >
                <img className='bg-[#464646] p-2 w-[90px] h-[90px] rounded-full' src={Logo} alt="Logo" />
            </div>

               <TextBlock heading="You’re in!" paragraph="Your account has been successfully created. Welcome to the world of real value."/>

            </div>
        </div>
        </div>
        
    );
    
};

export default YourIn;