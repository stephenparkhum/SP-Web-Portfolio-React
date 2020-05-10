import React, {Component} from 'react';

class Contact extends Component {
    render() { 
        return ( 
            <>
            <div className="Contact-info">
                <h2 className="title is-4">Contact Me</h2>
                <p>If you'd like help with your site, I'd love to take a look at it.</p>
                <br />
                <p>Feel free to drop me an email at <a href="mailto:stephenparkhum@outlook.com">stephenparkhum@outlook.com</a>!</p>
                <br />
                <p>If you're a business looking for help, it would be best to contact the team I work with directly, as we're more equipped
                <br />to handle bigger projects. Say hello here --> <a href="http://helloworlddevs.com">Hello World</a>.
                </p>
            </div>
            </>
         );
    }
}
 
export default Contact;