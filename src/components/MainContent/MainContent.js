import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faJs, 
    faNodeJs, 
    faPython, 
    faReact, 
    faPhp, 
    faDrupal,
    faSass,
    faBootstrap

} from '@fortawesome/free-brands-svg-icons';

import Skills from '../Skills/Skills';


class MainContent extends Component {
    render() { 

        return ( 
            <div class="main--content">
                <h2>Hi, I'm Stephen,</h2>
                <h3>I make websites and apps.</h3>
                <p>
                    I’m a Portland, Oregon-based web developer who has a passion for creating pixel-perfect experiences that serve every type of user, no matter their ability, interest, or choice of device.
                    <br /><br />Due to the ever-changing terrain of the tech landscape, I believe that an excellent web developer must take an ‘always-learning’ approach to new technologies and collaborations.
                </p>
                <br />
                
                {/* SKILLS SECTION */}
                <Skills />
            </div>
         );
    }
}
 
export default MainContent;