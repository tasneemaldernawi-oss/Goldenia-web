import React, { useState } from 'react';


const ProgressStepper = ({ currentStep, totalSteps = 3 }) => {
    
    const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center w-full max-w-sm mx-auto my-6">
            {steps.map((step, index) => {
                const isCurrent = step === currentStep;
               
                const isCompleted = step < currentStep;
                
                // 1. Determine the style of the DOT
                const dotClasses = isCurrent
                    ? 'bg-black w-4 h-4 shadow-lg' // Large, solid black for the current step
                    : isCompleted
                    ? 'bg-black w-3 h-3'       // Medium gray for completed steps
                    : 'bg-gray-300 w-3 h-3';       // Light gray for future steps

                // 2. Determine the style of the CONNECTING LINE (renders AFTER the current dot)
                // The line segment is "filled" if the progress has passed the dot before it.
                const lineClasses = isCompleted
                    ? 'bg-black  ' // Line is filled up to the completed step
                    : 'bg-gray-300  '; // Line is unfilled (future)

                return (
                    <React.Fragment key={step}>
                        {/* Step Dot */}
                        <div className={`rounded-full transition-all duration-300 flex-shrink-0 ${dotClasses}`}></div>

                        {/* Connecting Line (renders between steps, up to the second-to-last dot) */}
                        {index < totalSteps - 1 && (
                            <div className={`flex-1 h-1 mx-2 transition-all duration-500 ${lineClasses}`}></div>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default ProgressStepper;