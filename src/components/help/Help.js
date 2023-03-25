import React from 'react';
import Card from "../../ui/card/Card";
import './Help.css'

const Help = () => {
    return (
        <div className="container">
            <section id="help">
                <Card
                    title="8"
                    desc="лет опыта работы с недвижимостью в Москве и Алании."
                />
                <Card
                    title=">500"
                    desc="успешно завершённых сделок."
                />
                <Card
                    title=">80"
                    desc="активных инвесторов в недвижимость в Турции."
                />
                <Card
                    title="от 13%"
                    desc="прибыль клиентов от владения недвижимостью в год."
                />
            </section>
        </div>
    );
};

export default Help;