import react from "react";

const Button =({
    label = "Button",
    onClick,

}) => {
const base = "rounded-xl font-semibold flex items-center justify-center gap-2 px-6 py-3 transition-all duration-200 bg-[#F0BE1F] text-black ";
const responsiveWidth = "w-full sm:w-4/5 md:w-4/5 lg:w-4/5 mx-auto";

    return(
        <button type="button" className={`${base} ${responsiveWidth}`} onClick={onClick}  >
            {label}
        </button>
    );
};

export default Button;