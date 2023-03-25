import React from 'react';
import Input from "../../ui/input/Input";
import "./Questions.css"
import Button from "../../ui/buttons/Buttons";

const Questions = () => {
    return (
        <section id="questions">
            <div className="container">
                <div className="questions">
                    <div className="question">
                        <h1>Возникли вопросы? Мы <br/> поможем и подскажем</h1>
                        <p>Краткий перечень показателей преимуществ инвестиций в  <br/> недвижимость в Турции. Цифры основаны на реальных кейсах.</p>
                    </div>
                    <div className="questionsTwo">
                        <Input placeholder="Как вас зовут?"/>
                        <Input placeholder="+7 (999) 999-99-99"/>
                        <Input placeholder="Ваша почта"/>
                        <Input placeholder="Ваш вопрос"/>
                        <Button type={"secondary"}>Отправить</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Questions;