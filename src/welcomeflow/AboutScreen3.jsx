import React from "react";
import TextBlock from "../components/textBlock";
import CircleImage from "../components/CircleImage";
import DotsIndicator from "../components/dotsindecator";
import Button from "../components/Button";
const AboutScreen3=({onNext})=>{
    return(

        <div className="relative flex flex-col items-center justify-between min-h-screen bg-white p-6">
             <div className="flex flex-col items-center gap-4 mt-[150px]">
                <TextBlock heading="Freedom with Purpose" paragraph="Send, earn, and grow across currencies, metals, and regions — seamlessly, securely, and globally"/>
                <CircleImage size={150}/>
             </div>

             <div className="flex flex-row items-center w-full px-10 mb-6 gap-4">
                <DotsIndicator total={3} current={2}/>
                <Button label="Get started"/>

             </div>

        </div>
    );
};

export default AboutScreen3;