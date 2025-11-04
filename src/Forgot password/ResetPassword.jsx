import React, { useRef, useState, useEffect } from "react";
import Button from '../components/Button';

const ResetPassword=()=>{
        const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef(null);
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);
  const line5 = useRef(null);

  const togglePasswordVisibility = () => {
    setShowPassword((current) => !current);
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/)) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[$@#&!%*]/)) strength++;
    return strength;
  };

  useEffect(() => {
    const passwordInput = passwordRef.current;
    if (!passwordInput) return;

    const lines = [line1.current, line2.current, line3.current, line4.current, line5.current];
    const colorClasses = ["weak", "good", "medium", "verygood", "strong"];

    const handleInput = () => {
      const password = passwordInput.value;
      const strength = checkPasswordStrength(password);

      // Reset all lines (remove previous color classes)
      lines.forEach((line) => {
        if (!line) return;
        colorClasses.forEach((c) => line.classList.remove(c));
        line.classList.add("bg-gray-200"); // base color
      });

      if (strength >= 1 && line1.current) line1.current.classList.add("weak");
      if (strength >= 2 && line2.current) line2.current.classList.add("good");
      if (strength >= 3 && line3.current) line3.current.classList.add("medium");
      if (strength >= 4 && line4.current) line4.current.classList.add("verygood");
      if (strength >= 5 && line5.current) line5.current.classList.add("strong");
    };

    passwordInput.addEventListener("input", handleInput);
    return () => passwordInput.removeEventListener("input", handleInput);
  }, []);

    return(

    
    <div className="mx-auto w-full max-w-md p-7 bg-white shadow-2xl rounded-2xl my-[50px]">
      <div className="flex items-center space-x-2 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-700 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </div>

      <h1 className="text-xl mb-4 font-bold text-gray-800">Reset your Password</h1>
      <p className="text-sm text-gray-500 mb-6">
        Create a new password that keeps your wallet safe
      </p>

      <div className="flex items-center w-full border rounded">
        <input
          ref={passwordRef}
          type={showPassword ? "text" : "password"}
          placeholder="......."
          className="flex-grow p-3 text-sm bg-transparent focus:outline-none border-none"
        />
        <i
          onClick={togglePasswordVisibility}
          className={`far cursor-pointer mr-[20px] ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
          id="togglePassword"
        ></i>
      </div>

      <div className="flex space-x-3 mt-3">
        <div ref={line1} className="line w-12 h-2 rounded bg-gray-200 transition-colors duration-300"></div>
        <div ref={line2} className="line w-12 h-2 rounded bg-gray-200 transition-colors duration-300"></div>
        <div ref={line3} className="line w-12 h-2 rounded bg-gray-200 transition-colors duration-300"></div>
        <div ref={line4} className="line w-12 h-2 rounded bg-gray-200 transition-colors duration-300"></div>
        <div ref={line5} className="line w-12 h-2 rounded bg-gray-200 transition-colors duration-300"></div>
      </div>

      <ul className="">
        <li className="mt-4 text-gray-500 flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-gray-300 inline-block"> </span>Must be 8 characters long</li>
        <li className="text-gray-500 flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-gray-300 inline-block"></span>Must contain a symbol, number, and mix of upper and lower case letters</li>
      </ul>

      <h2 className="mt-7 mb-2"><strong>Re-enter Password</strong></h2>
      <div className="flex items-center w-full border rounded">
        {/*ther is a problem with the eye fix it */}
        {/*still have the checker for re-entering the password*/ }
        <input
          ref={passwordRef}
          type={showPassword ? "text" : "password"}
          placeholder="......."
          className="flex-grow p-3 text-sm bg-transparent focus:outline-none border-none"
        />
        <i
          onClick={togglePasswordVisibility}
          className={`far cursor-pointer mr-[20px] ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
          id="togglePassword"
        ></i>
      </div>

      <button className="w-full mt-[200px] py-3 bg-gray-300 text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors">
          Save New Password
      </button>


    </div>
    );
};

export default ResetPassword;