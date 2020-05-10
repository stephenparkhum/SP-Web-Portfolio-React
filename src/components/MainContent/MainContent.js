import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faJs, 
    faNodeJs, 
    faPython, 
    faReact, 
    faPhp, 
    faDrupal,
    faSass

} from '@fortawesome/free-brands-svg-icons';


class MainContent extends Component {
    render() { 
        return ( 
            <div class="main--content section is-medium">
                <h1 className="title is-3 has-text-white-ter">Hi, I'm Stephen,</h1>
                <h2 className="subtitle is-4 has-text-white-ter">I make <span className="has-text-info">websites</span> and <span className="has-text-info">apps.</span></h2>
                <p className="is_medium">
                    I’m a Portland, Oregon-based web developer who has a passion for creating pixel-perfect experiences that serve every type of user, no matter their ability, interest, or choice of device.
                    <br /><br />Due to the ever-changing terrain of the tech landscape, I believe that an excellent web developer must take an ‘always-learning’ approach to new technologies and collaborations.
                </p>
                <br />
                <br />
                <h4 className="title is-4 has-text-white-ter">Skills</h4>
                <div class="tabs is-medium">
                    <ul>
                        <li class="is-active"><a>Front-End</a></li>
                        <li><a>Back-End</a></li>
                        <li><a>Design</a></li>
                    </ul>
                </div>
                <div className="columns">
                    <div class="column">
                        <FontAwesomeIcon icon={faJs} size="3x" />
                    </div>
                    <div class="column">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                    </div>
                    <div class="column">
                        <FontAwesomeIcon icon={faNodeJs} size="3x" />
                    </div>
                    <div class="column">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                    </div>
                    <div class="column">
                        <FontAwesomeIcon icon={faPhp} size="3x" />
                    </div>
                    <div class="column">
                        <FontAwesomeIcon icon={faDrupal} size="3x" />
                    </div>
                    <div class="column">
                        <FontAwesomeIcon icon={faSass} size="3x" />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default MainContent;