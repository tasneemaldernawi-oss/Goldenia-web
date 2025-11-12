import React, { useState } from "react";
import Button from "../components/Button";
import SkipButton from "../components/PreviousButton";
import HeaderSignup from "../components/headerSignup";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  // password strength calculation
  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[$@#&!%*]/.test(password)) strength++;
    return strength;
  };

  const strength = checkPasswordStrength(password);
  const passwordMatch = password && confirmPassword && password === confirmPassword;

  return (
    <div className="bg-[#110070] p-4 pb-8">
      <HeaderSignup />
      <div className="mx-auto w-full max-w-md p-7 bg-[#110070] shadow-2xl rounded-2xl my-[50px] border-[1px] border-[#2000D4]">
        <div className="flex items-center space-x-2 mb-6">
          <SkipButton />
        </div>

        <h1 className="text-xl mb-3 font-bold text-white text-center">Reset your Password</h1>
        <p className="text-sm text-gray-400 mb-6 text-center">
          Create a new password that keeps your wallet safe
        </p>

        {/* Password Input */}
        <div className="flex items-center w-full border-[1px] rounded">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="......."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-grow p-3 text-sm bg-transparent focus:outline-none border-none text-white"
          />
          <i
            onClick={togglePasswordVisibility}
            className={`far cursor-pointer mr-[20px] text-white ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
          ></i>
        </div>

        {/* Strength bars */}
        <div className="flex space-x-3 mt-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`w-[20%] h-2 rounded transition-colors duration-300 ${
                strength >= i
                  ? "bg-green-400"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        {/* Validation ticks */}
        <ul className="mt-4 text-sm">
          <li className={`flex items-center gap-2 ${password.length >= 8 ? "text-green-400" : "text-gray-400"}`}>
            <span className={`h-3 w-3 rounded-full ${password.length >= 8 ? "bg-green-400" : "bg-gray-300"} inline-block`} />
            Must be at least 8 characters long
          </li>
          <li
            className={`flex items-center gap-2 ${
              /[A-Z]/.test(password) && /[0-9]/.test(password) && /[$@#&!%*]/.test(password)
                ? "text-green-400"
                : "text-gray-400"
            }`}
          >
            <span
              className={`h-3 w-3 rounded-full ${
                /[A-Z]/.test(password) && /[0-9]/.test(password) && /[$@#&!%*]/.test(password)
                  ? "bg-green-400"
                  : "bg-gray-300"
              } inline-block`}
            />
            Must contain a symbol, number, and mix of upper & lower case letters
          </li>
        </ul>

        {/* Confirm Password */}
        <h2 className="mt-7 mb-2 text-white">Re-enter Password</h2>
        <div className="flex items-center w-full border rounded">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="......."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="flex-grow p-3 text-sm bg-transparent focus:outline-none border-none text-white"
          />
          <i
            onClick={toggleConfirmVisibility}
            className={`far cursor-pointer mr-[20px] text-white ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}
          ></i>
        </div>

        {/* Password Match Indicator */}
        <div className="mt-2">
          {confirmPassword.length > 0 && (
            <p
              className={`text-sm flex items-center gap-2 ${
                passwordMatch ? "text-green-400" : "text-red-400"
              }`}
            >
              <span
                className={`h-3 w-3 rounded-full ${
                  passwordMatch ? "bg-green-400" : "bg-red-400"
                } inline-block`}
              />
              {passwordMatch ? "Passwords match" : "Passwords do not match"}
            </p>
          )}
        </div>

        <button
          disabled={!passwordMatch || strength < 3}
          className={`w-full mt-[100px] py-3 rounded-lg shadow-md font-semibold transition-colors ${
            passwordMatch && strength >= 3
              ? "bg-[#F0BE1F] text-black hover:bg-yellow-300"
              : "bg-gray-500 text-gray-300 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
