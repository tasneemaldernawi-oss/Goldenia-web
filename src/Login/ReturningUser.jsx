import React, {useState, useRef} from "react";

const SwitchAccount=()=>{
     const [showPassword, setShowPassword] = useState(false);
     const passwordRef = useRef(null);
    
    const togglePasswordVisibility = () => {
     setShowPassword((current) => !current);
      };
    return(
        <div className="mx-auto w-full max-w-md p-6 bg-white shadow-2xl rounded-2xl my-[50px]">
          <div className="flex items-center space-x-2 mb-6">
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-gray-700 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </div>
           <h1 className="text-xl mb-4 font-bold text-gray-800">Welcome back to Goldenia</h1> 
          <p className="text-sm text-gray-500 mb-6">Your gateway to a world of real value</p>
             {/*password*/}
        <div className="flex items-center w-full border border-gray-300  rounded-lg mt-3 bg-gray-50 transition-all duration-300">
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
      {/* Forgot password*/}

      <div className="">
        <p className="float-right mt-2 mb-5 mr-1 text-sm"><strong>Forgot Password?</strong></p>
   
      </div >

      <div className="flex flex-col items-center  w-full pt-[200px]">
     
     <svg xmlns="http://www.w3.org/2000/svg" width="44" height="46" viewBox="0 0 54 56" fill="none">
<g clip-path="url(#clip0_175_898)">
<path d="M39.4178 30.0834V32.1667C39.4178 37.9367 38.0347 43.5104 35.4282 48.5115L34.9557 49.3881L31.3163 47.3592C33.733 43.024 35.0861 38.1702 35.2369 33.1165L35.2511 32.1667V30.0834H39.4178ZM26.9178 23.8334H31.0844V32.1667L31.073 32.9556C30.9074 38.7281 28.9265 44.194 25.4667 48.6833L24.9859 49.2894L21.7589 46.6534C24.9188 42.7852 26.739 38.0036 26.9053 32.9298L26.9178 32.1667V23.8334ZM29.0011 15.5C34.754 15.5 39.4178 20.1637 39.4178 25.9167H35.2511C35.2511 22.4649 32.4528 19.6667 29.0011 19.6667C25.5492 19.6667 22.751 22.4649 22.751 25.9167V32.1667C22.751 36.8238 21.0434 41.2175 18.0198 44.6184L17.579 45.0973L14.562 42.2236C16.9865 39.6784 18.4192 36.3579 18.5709 32.7973L18.5843 32.1667V25.9167C18.5843 20.1637 23.248 15.5 29.0011 15.5ZM29.0011 7.16669C39.3563 7.16669 47.7511 15.5614 47.7511 25.9167V32.1667C47.7511 35.704 47.3307 39.1873 46.5078 42.5631L46.2186 43.6844L42.1982 42.59C43.013 39.5963 43.4744 36.5017 43.5669 33.3509L43.5844 32.1667V25.9167C43.5844 17.8625 37.0551 11.3334 29.0011 11.3334C25.7253 11.3334 22.7018 12.4134 20.2673 14.2368L17.2986 11.266C20.506 8.70067 24.5744 7.16669 29.0011 7.16669ZM14.3504 14.2142L17.3211 17.1829C15.5911 19.4928 14.5303 22.3327 14.4261 25.4152L14.4163 25.9146L14.425 30.0834C14.425 32.4156 13.8753 34.6721 12.8393 36.7025L12.514 37.3048L8.89551 35.239C9.68567 33.8548 10.1479 32.3086 10.2409 30.6925L10.2584 30.0834L10.258 25.9167C10.251 21.4901 11.785 17.4217 14.3504 14.2142Z" fill="black"/>
</g>
<g clip-path="url(#clip1_175_898)">
<path d="M25.0003 48.8334C13.4944 48.8334 4.16699 39.5059 4.16699 28C4.16699 16.4941 13.4944 7.16669 25.0003 7.16669C36.5062 7.16669 45.8337 16.4941 45.8337 28C45.8337 39.5059 36.5062 48.8334 25.0003 48.8334ZM25.0003 44.6667C34.2051 44.6667 41.667 37.2048 41.667 28C41.667 18.7953 34.2051 11.3334 25.0003 11.3334C15.7956 11.3334 8.33366 18.7953 8.33366 28C8.33366 37.2048 15.7956 44.6667 25.0003 44.6667ZM14.5837 30.0834H18.7503C18.7503 33.5352 21.5485 36.3334 25.0003 36.3334C28.4522 36.3334 31.2503 33.5352 31.2503 30.0834H35.417C35.417 35.8363 30.7532 40.5 25.0003 40.5C19.2474 40.5 14.5837 35.8363 14.5837 30.0834ZM16.667 25.9167C14.9411 25.9167 13.542 24.5175 13.542 22.7917C13.542 21.0658 14.9411 19.6667 16.667 19.6667C18.3929 19.6667 19.792 21.0658 19.792 22.7917C19.792 24.5175 18.3929 25.9167 16.667 25.9167ZM33.3337 25.9167C31.6078 25.9167 30.2087 24.5175 30.2087 22.7917C30.2087 21.0658 31.6078 19.6667 33.3337 19.6667C35.0595 19.6667 36.4587 21.0658 36.4587 22.7917C36.4587 24.5175 35.0595 25.9167 33.3337 25.9167Z" fill="black"/>
</g>
<rect x="25" width="4" height="56" fill="black"/>
<defs>
<clipPath id="clip0_175_898">
<rect width="25" height="50" fill="white" transform="translate(29 3)"/>
</clipPath>
<clipPath id="clip1_175_898">
<rect width="25" height="50" fill="white" transform="translate(0 3)"/>
</clipPath>
</defs>
</svg>

<p className="text-sm"><strong>Use Biometrics Instead</strong></p>
 </div>


            <button className="w-full mt-8 py-3 bg-gray-300 text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors">
              Log In
            </button>
            <div className="mt-8 text-center text-sm">
              Not your account? <a href="#" className="text-blue-600 font-semibold hover:underline">Switch Account</a>
            </div>
        </div>

    );
};


export default SwitchAccount;
