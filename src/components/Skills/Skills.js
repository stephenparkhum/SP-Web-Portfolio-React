import React, {Component} from 'react';
import skillsData from './skills-data';

// ICONS
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

class Skills extends Component {
    render() {
        const displaySkills = skillsData.map(skill => {
          return (
            <div className="column">
              <FontAwesomeIcon icon={skill.icon} size="3x" />
            </div>
          )
        })

        return (
            <div>
                <h1>Skills</h1>
                <div className="column">
                  <FontAwesomeIcon icon={faJs} size="3x" />
                </div>
                <div className="column">
                  <FontAwesomeIcon icon={faReact} size="3x" />
                </div>
                <div className="column">
                  <FontAwesomeIcon icon={faNodeJs} size="3x" />
                </div>
                <div className="column">
                  <FontAwesomeIcon icon={faPython} size="3x" />
                </div>
                <div className="column">
                  <FontAwesomeIcon icon={faPhp} size="3x" />
                </div>
                <div className="column">
                  <FontAwesomeIcon icon={faDrupal} size="3x" />
                </div>
                <div className="column">
                  <FontAwesomeIcon icon={faBootstrap} size="3x" />
                </div>  
            </div>
        )
    }
}

export default Skills;