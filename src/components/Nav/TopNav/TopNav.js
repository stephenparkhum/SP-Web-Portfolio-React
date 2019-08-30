import React, {Component} from 'react';
import './TopNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

class TopNav extends Component {
    render() { 

        const blue = getComputedStyle(document.documentElement).getPropertyValue('--med-blue');

        return (
            <nav className="TopNav">
                <div className="TopNav-name">
                    <h1>Stephen Parker // <span>Full-Stack Developer</span></h1>
                </div>
                <div className="TopNav-links">
                    <ul>
                        <a href="http://github.com/stephenparkhum" target="_blank"><li><FontAwesomeIcon icon={faGithub} color={blue} size="2x"/></li></a>
                        <a href="https://www.linkedin.com/in/stephenparker-03/" target="_blank"><li><FontAwesomeIcon color={blue} icon={faLinkedin} size="2x"/></li></a>
                    </ul>
                </div>
            </nav>
            
         );
    }
}
 
export default TopNav;