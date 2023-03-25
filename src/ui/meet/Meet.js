import React from 'react';
import "./Meet.css"


export default function Meet ({title, prof}){
   return <div className="meet">
       <h1>{title}</h1>
       <p>{prof}</p>
   </div>
};