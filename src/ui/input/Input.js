import React from 'react';
import "./Input.css"


export default function Input ({inputType, inputValue, placeholder}){
    return <input className="input" type={inputType} value={inputValue} placeholder={placeholder}/>
};