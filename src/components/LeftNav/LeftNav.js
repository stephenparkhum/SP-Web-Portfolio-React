import React from 'react';
import {NavLink} from 'react-router-dom';
import './LeftNav.css';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const LeftNav = () => {
    return (
        <>
        <div className="LeftNav">
            <img src={require('../../images/Spface.jpeg')} className="StephenFace" alt="Stephen's Face" />
            <h3>STEPHEN PARKER</h3>
            <p>Fullstack Developer</p>
            <p>Portland, OR</p>
            <div className="LeftNavItems">
                <ul>
                    <NavLink to="/about" activeClassName="NavLinkActive">
                        <li>About</li>
                    </NavLink>
                    <NavLink to="/portfolio" activeClassName="NavLinkActive">
                        <li>Portfolio</li>
                    </NavLink>
                    <NavLink to="/contact" activeClassName="NavLinkActive">
                        <li>Contact</li>
                    </NavLink>
                </ul>

            </div>
            <div className="SocialIcons">
                <FontAwesomeIcon icon={faGithubSquare} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faTwitterSquare} />
            </div>
            <div className="ContactButtonSection">
            <a href="mailto:stephenparkhum@outlook.com" target="_blank">
                <button className="ContactButton">Contact Me</button>
            </a> 
            </div>
        </div>
        </>
    )
}

export default LeftNav;