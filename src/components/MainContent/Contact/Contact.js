import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

class Contact extends Component {
    render() { 
        return ( 
            <>
            <h2>Contact Me</h2>
            <div className="Contact-info">
                <ul>
                    <li><FontAwesomeIcon icon={faEnvelope} size="2x" /> | <a href="mailto:stephenparkhum@outlook.com">stephenparkhum@outlook.com</a></li>
                    <li>LinkedIn</li>
                    <li>Github</li>
                </ul>
            </div>
            </>
         );
    }
}
 
export default Contact;