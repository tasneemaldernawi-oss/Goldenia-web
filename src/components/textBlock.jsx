import React from "react";

const TextBlock= ({heading= "heading", paragraph="paragraph"})=>{
    return(
        <div className="max-w-md text-center">
            <h2 className="text-2xl font-bold mb-2">{heading}</h2>
            <p className="text-gray-600">{paragraph}</p>

        </div>
    )
}


export default TextBlock;