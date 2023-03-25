import React from 'react';
import './Header.css'
import {Link} from "react-router-dom"
import group from '../../assec/images/Group_87.svg.svg'
import {BsTwitter, BsFacebook} from "react-icons/bs";
import Button from "../../ui/buttons/Buttons";

const Header = () => {
    return (
        <section id="header">
            <div className="container">
                <div className="header">
                    <div className="icon">
                        <Link className="link" to="/"><img src={group} alt="img"/></Link>

                    </div>
                    <div className="nav">
                        <Link className="link" to="/services">Услуги</Link>
                        <Link className="link" to="/projects">Проекты</Link>
                        <Link className="link" to="/process">Процесс</Link>
                        <Link className="link" to="/contact">Контакты</Link>
                        <a className="link" href="tel:(+996)">+90 505 913-70-89</a>
                    </div>
                    <div className="buttons">
                        <div className="icons">
                            <BsTwitter width="40px"/>
                            <BsFacebook/>
                        </div>
                        <Button type={"secondary"}>Получить консультацию</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;