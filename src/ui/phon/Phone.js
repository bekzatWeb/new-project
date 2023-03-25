import React from 'react';
import "./Phone.css"

export default function Phone ({title, prof, nav, link}){
     return <div className='phone'>
         <h1>{title}</h1>
         <a href="#">{prof}</a>
         <a href="#">{nav}</a>
         <a href="#">{link}</a>
     </div>
};