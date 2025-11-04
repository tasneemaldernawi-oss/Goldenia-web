import React from "react";
import CircleImage from "../components/CircleImage";
import TextBlock from "../components/textBlock";
import SkipButton from "../components/skipButton";
import DotsIndicator from "../components/dotsindecator";
import NextButton from "../components/nextButton";

const AboutScreen2=({onNext}) =>{
    return(
        <div className="relative flex flex-col items-center justify-between min-h-screen bg-white p-6">
          <SkipButton onClick/>

          <div className="flex flex-col items-center gap-4 mt-[150px]">
              <TextBlock heading="The Power of BPC" paragraph="Every BPC is backed by tangible value — gold, silver, and global liquidity. Trade, spend, or save, with real-world stability"/>
              <CircleImage size={150}/>
          </div>

          <div className="flex items-center justify-between w-full px-10 mb-6">
            <DotsIndicator total={3} current={1}/>
            <NextButton onClick={onNext}/>

          </div>

        </div>

        
    );
};

export default AboutScreen2;