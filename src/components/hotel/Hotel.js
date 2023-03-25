import React from 'react';
import Meet from "../../ui/meet/Meet";
import "./Hotel.css"
import divZero from "../../assec/images/div.svg"
import divOne from "../../assec/images/div (1).svg"
import divTwo from "../../assec/images/div (2).svg"
import divThee from "../../assec/images/div (3).svg"

const Hotel = () => {
    return (
        <section id="hotel">
            <div className="container">
                <center>
                    <h2>Не берём с вас комиссию.</h2>
                    <span>Мы зарабатываем только на вознаграждении от застройщика. <br/> Цена через нас дешевле, нежели чем при покупке напрямую.</span>
                </center>
                <div className="hotel">
                    <Meet
                        title="Встретим вас"
                        prof="Предоставим персональную машину для поездки из аэропорта до района, в котором рассматриваете покупку."
                    />
                    <Meet
                        title="Заселим вас в отель"
                        prof="Согласуем отель на время вашего пребывания в Турции. Компенсируем ваши расходы на проживание при покупке."
                    />
                </div>
                <div className="routine">
                    <div className="blocRoutine">
                        <h1>Возьмём рутину на себя</h1>
                        <p>Подскажем способы проведения платежа, договоримся на рассрочку, переведём документы, которые запросит ваш банк.</p>
                    </div>
                    <div className="blocRoutineTwo">
                        <h3>Более 5 способов оплаты</h3>
                        <a href="#"><img src={divZero} alt="img"/></a>
                        <a href="#"><img src={divOne} alt="img"/></a>
                        <a href="#"><img src={divTwo} alt="img"/></a>
                        <a href="#"><img src={divThee} alt="img"/></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hotel;