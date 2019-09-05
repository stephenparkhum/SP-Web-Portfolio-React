import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {
    render() { 
        return ( 
            <>
            <div className="Contact-info">
                <h2>Contact Me</h2>
                <p>Feel free to drop me an email at <code><a href="mailto:stephenparkhum@outlook.com">stephenparkhum@outlook.com</a></code>!
                </p>
            </div>
            </>
         );
    }
}
 
export default Contact;