"use client"

import React from "react"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"   
import "flagpack/dist/flagpack.css"           


const NumberAndCountry = ({ value, onChange, className }) => {
      return (
            <PhoneInput
                  international
                  defaultCountry="AU" 
                  value={value}
                  onChange={onChange}
                  className={`phone-input-custom ${className}`} // Ensure you style this class in your CSS if needed
                  // We remove 'required' here to handle validation in the parent for better control
            />
      )
}

export default NumberAndCountry