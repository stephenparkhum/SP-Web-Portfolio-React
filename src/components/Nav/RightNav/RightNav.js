import React from 'react';
import {NavLink} from 'react-router-dom';
import './RightNav.css';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

function RightNav() {
    const blue = getComputedStyle(document.documentElement).getPropertyValue('--med-blue');

    const aboutIcon = <FontAwesomeIcon icon={faUser} color={blue} size="2x"/>;
    const contactIcon = <FontAwesomeIcon icon={faEnvelope} color={blue} size="2x"/>;
    const portIcon = <FontAwesomeIcon icon={faLaptopCode} color={blue} size="2x"/>;

    

    return (
        <> 
        <nav className="RightNav">
            <ul>
                <NavLink to="/about" activeClassName="RightNav-active"><li className="about">{aboutIcon}</li></NavLink>
                <NavLink to="/portfolio" activeClassName="RightNav-active"><li className="port">{portIcon}</li></NavLink>
                <NavLink to="/contact"><li className="contact">{contactIcon}</li></NavLink>
            </ul>
        </nav>
        </>
    )
}

export default RightNav;