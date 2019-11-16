import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

class ToggleFooter extends Component {
    render() { 
        return ( 
            <>
            <div className="ToggleFooter-main">
                <button><FontAwesomeIcon icon={faSun} /></button>
                <div className="ToggleFooter-strip">
                    <div className="ToggleFooter-circle"></div>
                </div>
                <button><FontAwesomeIcon icon={faMoon} /></button>
            </div>
            </>
         );
    }
}
 
export default ToggleFooter;