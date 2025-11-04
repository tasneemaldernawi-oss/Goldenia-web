import React from "react";
import CircleImage from "../components/CircleImage";
import TextBlock from "../components/textBlock";
import SkipButton from "../components/skipButton";
import DotsIndicator from "../components/dotsindecator";
import NextButton from "../components/nextButton";

const AboutScreen1=({onNext}) =>{
    return(
        <div className="relative flex flex-col items-center justify-between min-h-screen bg-white p-6">
          <SkipButton onClick/>

          <div className="flex flex-col items-center gap-4 mt-[150px]">
              <TextBlock heading="What is Goldenia?" paragraph="Goldenia is a digital economy powered by the Basic Point Coin (BPC), your key to multi-currency wallets, metal-backed assets, and smart investing"/>
              <CircleImage size={150}/>
          </div>

          <div className="flex items-center justify-between w-full px-10 mb-6">
            <DotsIndicator total={3} current={0}/>
            <NextButton onClick={onNext}/>

          </div>

        </div>

        
    );
};

export default AboutScreen1;