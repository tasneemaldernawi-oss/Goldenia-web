import React from 'react';
import Button from "../components/Button";
import CircleImage from "../components/CircleImage";
import TextBlock from '../components/textBlock';


const Welcome=()=>{
    return(
     <div className="flex flex-col items-center justify-between min-h-screen gap-1 bg-white p-10">
       <div className='flex flex-col items-center gap-4 mt-[150px]'>
        <CircleImage size={120}/>
        <TextBlock heading="Welcome to Goldenia" paragraph="A smarter, fairer financial world built on real assets — where gold, silver, and digital innovation meet"/>
       </div>

       <div className="flex flex-col items-center w-full">

        <Button label='Explore'  />
       </div>
       
   
    </div>
    );
};

export default Welcome;