import React from 'react';
import Input from "../../ui/input/Input";
import './Rent.css'
import Button from "../../ui/buttons/Buttons";
import divImg from '../../assec/images/div.png'

const Rent = () => {
    return (
        <section id="rent">
            <div className="container">
                <div className="rent">
                    <div className="left">
                        <h1>Поможем выкупить <br/> апартаменты от застройщика <br/> в Турции от 6,5 млн. рублей</h1>
                        <p>Предоставляем комплексные решения в сфере жилой недвижимости. Покупка. Аренда. Доверительное управление. Консалтинг.</p>
                        <div className="inputs">
                            <Input
                                inputType={"text"}
                                inputValue={""}
                                placeholder={"Опишите ваш вопрос"}
                            />
                            <Input
                                inputType={"text"}
                                inputValue={""}
                                placeholder={"Как вас зовут?"}
                            />
                            <Input
                                inputType={"text"}
                                inputValue={""}
                                placeholder={"+7(999) 999-99-99"}
                            />
                        </div>
                        <Button>Задать вопрос специалисту</Button>
                    </div>
                    <div className="right">
                        <img className="divImg" src={divImg} alt="img"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rent;