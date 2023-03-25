import React from 'react';
import "./Apartment.css"
import Apartments from "../../ui/apartments/Apartments";

const Apartment = () => {
    return (
        <section id="apartment">
            <div className="container">
                <div className="apartment">
                    <div className="apartment">
                        <Apartments
                            sum="7 500 000 руб."
                            square="от 30 м2"
                            location="за МКАДом"
                            finish="нет"
                            expenses="≈ 2 000 000 руб."
                            potential="до 45 000 руб."
                            prise="≈ 3-5%"
                        />
                    </div>
                    <div className="apartment">
                        <Apartments
                            sum="7 500 000 руб."
                            square="от 30 м2"
                            location="за МКАДом"
                            finish="нет"
                            expenses="≈ 2 000 000 руб."
                            potential="до 45 000 руб."
                            prise="≈ 3-5%"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Apartment;