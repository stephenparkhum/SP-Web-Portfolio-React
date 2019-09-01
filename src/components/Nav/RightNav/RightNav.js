import React from 'react';
import {NavLink} from 'react-router-dom';
import './RightNav.css';

function RightNav() {
    return (
        <> 
        <nav>
            <ul>
                <NavLink to="/about" activeClassName="RightNav-active"><li>ABOUT</li></NavLink>
                <NavLink to="/portfolio" activeClassName="RightNav-active"><li>PORTFOLIO</li></NavLink>
                <a href="mailto:stephenparkhum@outlook.com"><li>CONTACT</li></a>
            </ul>
        </nav>
        </>
    )
}

export default RightNav;