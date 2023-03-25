import React from 'react';
import Phone from "../../ui/phon/Phone";
import "./Contacts.css"

const Contacts = () => {
    return (
        <section id="contacts">
            <div className="container">
                <div className="contacts">
                    <Phone
                    title="Связаться в соцсетях"
                    prof="Написать в Whatsapp"
                    nav="Написать в Telegram"
                    link="Написать в Instagram"
                    />
                    <Phone
                        title="Позвонить по телефону"
                        prof="+7 925 285-66-74"
                        nav="+90 505 913-70-89"
                    />
                    <Phone
                        title="Написать на почту"
                        prof="info.makler.ru@yandex.ru"
                    />
                </div>
            </div>
        </section>
    );
};

export default Contacts;