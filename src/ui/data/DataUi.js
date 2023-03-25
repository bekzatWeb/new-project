import React from 'react';
import "./DataUi.css"
import Button from "../buttons/Buttons";

export default function DataUi ({title, pars, information}){
   return <div className="data">
       <h1>{title}</h1><h6>{information}</h6>
       <p>{pars}</p>
       <Button>Оставить заявку</Button>
   </div>
};