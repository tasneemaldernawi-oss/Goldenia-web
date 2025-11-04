import React from "react";
import TextBlock from "../components/textBlock";
import Button from "../components/Button";

const GetStarted =() =>{
    return(

        <div className="flex flex-col items-center justify-center p-7">
            <div className="bg-gray-300 w-[250px] h-[300px] md:rounded ">
            </div>

         <div className="flex flex-col items-center gap-4 mt-[100px] mb-[70px]">
                <TextBlock heading="Ready to experience
                a new kind of wealth?" paragraph=""/>
             </div>

       <div className="flex flex-col items-center w-full gap-4">

        <Button label='Create an Acoount'/>
        <Button label="Log in"/>
       </div>

        </div>
    );
};

export default GetStarted;