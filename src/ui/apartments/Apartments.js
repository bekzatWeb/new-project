import React from 'react';
import "./Apartments.css"

export default function Apartments({title, sum, square, location, finish, expenses, potential, prise, type}){
    return <>
        <section id="global">
            {title}
            <div className="apart"><span>Сумма покупки:</span><h4 className={`span ${type}-span`}>{sum}</h4></div>
            <hr/>
            <div className="apart"><span>Площадь:</span><h4 className={`span ${type}-span`}>{square}</h4></div>
            <hr/>
            <div className="apart"><span>Местоположение:</span><h4 className={`span ${type}-span`}>{location}</h4></div>
            <hr/>
            <div className="apart"><span>Отделка:</span><h4 className={`span ${type}-span`}>{finish}</h4></div>
            <hr/>
            <div className="apart"><span>Затраты на ремонт:</span><h4 className={`span ${type}-span`}>{expenses}</h4></div>
            <hr/>
            <div className="apart"><span>Потенциальная арендная плата:</span><h4 className={`span ${type}-span`}>{potential}</h4></div>
            <hr/>
            <div className="apart"><span>Потенциал роста цены:</span><h4 className={`span ${type}-span`}>{prise}</h4></div>
            <hr/>
        </section>
    </>
};