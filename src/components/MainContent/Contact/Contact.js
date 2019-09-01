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
                <h3>Contact Me</h3>
                <ul>
                    <li>Email:</li>
                    <li>Github:</li>
                    <li>Email:</li>
                </ul>
            </div>
            </>
         );
    }
}
 
export default Contact;