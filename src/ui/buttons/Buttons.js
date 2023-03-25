import React from 'react';
import './Buttons.css'

export default function Button({children, type}){
    return <button className={`button ${type}-button`}>{children}</button>
};