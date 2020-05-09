import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faJs, 
    faNodeJs, 
    faPython, 
    faReact, 
    faLinkedin, 
    faGithub, 
    faPhp, 
    faDrupal,

} from '@fortawesome/free-brands-svg-icons';

class About extends Component {
    render() { 
        return ( 
            <>
            <div className="About-info">
            <h2 className="title is-4">About Me</h2>
                <figure class="image is-128x128">
                    <img class="is-rounded" src="https://media-exp1.licdn.com/dms/image/C5603AQFJcYLRqlWOKA/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=oHjMc5yCCQXFII_v1rG4yn9i2d4QanvN6V7o5io4J3w" />
                </figure>
                <p>
                    I'm a Portland, Oregon-based web developer who has a passion for creating pixel-perfect experiences that
                    serve every type of user, no matter their ability, interest, or choice of device.<br/> <br/>
                    Due to the ever-changing terrain of the tech landscape, I believe that an excellent web developer must
                    take an 'always-learning' approach to new technologies and collaborations.
                </p>
                <h3 className="desktop-hide">Social</h3>
                <div className="About-social desktop-hide">
                    <a href="https://www.linkedin.com/in/stephenparker-03/"><FontAwesomeIcon icon={faLinkedin} size="4x" /></a>
                    <a href="http://github.com/stephenparkhum"><FontAwesomeIcon icon={faGithub} size="4x" /></a>
                </div>
                <h3>Skills</h3>
                <div className="About-lang">
                    <FontAwesomeIcon icon={faJs} size="4x" />
                    <FontAwesomeIcon icon={faReact} size="4x" />
                    <FontAwesomeIcon icon={faNodeJs} size="4x" />
                    <FontAwesomeIcon icon={faPython} size="4x" />
                    <FontAwesomeIcon icon={faPhp} size="4x" />
                    <FontAwesomeIcon icon={faDrupal} size="4x" />
                </div>
            </div>
            </>
         );
    }
}
 
export default About;