import React from 'react';
import {NavLink} from 'react-router-dom';
import './RightNav.css';

function RightNav() {
    return (
        <> 
        <nav>
            <ul>
                <NavLink to="/about"><li>ABOUT</li></NavLink>
                <NavLink to="/portfolio"><li>PORTFOLIO</li></NavLink>
                <NavLink to="/contact"><li>CONTACT</li></NavLink>
            </ul>
        </nav>
        </>
    )
}

export default RightNav;