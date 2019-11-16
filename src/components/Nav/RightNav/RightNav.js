import React from 'react';
import {NavLink} from 'react-router-dom';
import './RightNav.css';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLaptop } from '@fortawesome/free-solid-svg-icons'

function RightNav() {
    const aboutIcon = <FontAwesomeIcon icon={faUser} size="2x"/>;
    const contactIcon = <FontAwesomeIcon icon={faEnvelope} size="2x"/>;
    const portIcon = <FontAwesomeIcon icon={faLaptop} size="2x"/>;

    return (
        <> 
        <nav>
            <ul>
                <NavLink to="/about" activeClassName="RightNav-active"><li>{aboutIcon}</li></NavLink>
                <NavLink to="/portfolio" activeClassName="RightNav-active"><li>{portIcon}</li></NavLink>
                <NavLink to="/contact"><li>{contactIcon}</li></NavLink>
            </ul>
        </nav>
        </>
    )
}

export default RightNav;