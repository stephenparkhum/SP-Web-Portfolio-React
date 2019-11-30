import React from 'react';
import './AboutMe.css';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact, faPython, faPhp, faDrupal, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
    return (
        <div className="AboutMeSection">
            <p>I’m a Portland, Oregon-based web developer who has a passion for creating pixel-perfect experiences that serve every type of user, no matter their ability, interest, or choice of device.</p>
            <p>Due to the ever-changing terrain of the tech landscape, I believe that an excellent web developer must take an 'always-learning' approach to new technologies and collaborations.</p>
            <h3>Skills</h3> 
            <div className="AboutMeSkills">   
                <FontAwesomeIcon icon={faJsSquare} />
                <FontAwesomeIcon icon={faReact} />
                <FontAwesomeIcon icon={faNodeJs} />
                <FontAwesomeIcon icon={faPython} />
                <FontAwesomeIcon icon={faPhp} />
                <FontAwesomeIcon icon={faDrupal} />

            </div>
        </div>
    )
}

export default AboutMe;