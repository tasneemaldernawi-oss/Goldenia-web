import React from "react";

const CircleImage=({size = 100, color ="#ccc"}) =>{
    const styles={
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return <div style={styles}></div>
};




export default CircleImage;