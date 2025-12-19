"use client";
import { useState } from "react";
// import { "BASEURL" } from "@/Constant";
import axios from "axios";
import { useTranslations } from "next-intl";

const Subscribe = () => {
 const [inputValue, setInputValue] = useState("");
 const [isValidEmail, setIsValidEmail] = useState(true); // State to track if email is valid

 const handleSubscribe = async () => {
   console.log(inputValue);
   // Regular expression for email validation
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (emailRegex.test(inputValue)) {
     // If email is valid, perform subscription logic
     // console.log("Email is valid:", inputValue);
     const data = {
       email: inputValue,
     };
     try {
       const response = await axios.post(`${"BASEURL"}/user/subscribe`, data, {
         headers: {
           Accept: "application/json",
           "Content-Type": "application/json",
           Authorization: localStorage.getItem("token"),
         },
       });
       // console.log(response)
       console.log(response?.data);
       if (response?.data?.success) {
         window.alert(response?.data?.message);
         setInputValue("");
       }
     } catch (error) {
       console.error("Booking cancel error:", error);
     }
     setIsValidEmail(true);
     // Add your subscription logic here
   } else {
     // If email is not valid, set isValidEmail state to false
     console.log("Invalid email:", inputValue);
     setIsValidEmail(false);
   }
 };
 const t = useTranslations('Blog');
 return (
   <div className="p-5 md:p-10 md:px-14 my-3 md:my-6 main_container bg-secondary rounded-md">
     <div className="flex items-center flex-col md:flex-row gap-2 md:gap-5">
       <div className="w-full md:w-2/3">
         <h2 className="text-2xl md:text-3xl font-bold text-white my-2 md:my-4">
         {t(`Subscribe.title`)}
         </h2>
         <p className="text-sm md:text-base text-white my-2">Join the  {t(`Subscribe.description`)}</p>
       </div>
       <div className="w-full md:w-1/3">
       <div className="join text-black w-full rounded-full">
                <input
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                  type="email"
                  required
                  placeholder="Enter your email here"
                  className={`input input-sm md:input-md input-bordered join-item w-full ${
                    isValidEmail ? "" : "border-red-500"
                  }`} // Add red border when email is not valid
                />
                <button
                  onClick={handleSubscribe}
                  className="btn btn-sm md:btn-md btn-primary join-item text-white"
                >
                   {t(`Subscribe.button`)}
                </button>
              </div>
       </div>
     </div>
   </div>
 );
};

export default Subscribe;
