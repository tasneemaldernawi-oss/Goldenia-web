import React from "react";

const DotsIndicator = ({ total = 3, current = 1 }) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index === current ? "bg-gray-800 w-4" : "bg-gray-400"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default DotsIndicator;
