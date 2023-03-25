import React from 'react';
import './Card.css'


export default function Card({title, desc}) {
    return <div className={"card"}>
        <h1>{title}</h1>
        <p>{desc}</p>
    </div>
};