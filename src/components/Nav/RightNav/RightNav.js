import React from 'react';
import $ from 'jquery';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function RightNav() {
    return (
        <> 
        <div className="navbar-end">
            <div className="navbar-item">
                <div className="buttons">
                    <a className="button is-link is-normal" href="https://github.com/stephenparkhum" rel="no-follow noreferrer" target="_blank">
                        <span className="icon is-large">
                            <i className="fab fa-linkedin-in fa-2x" aria-hidden="true"></i>
                        </span>
                    </a>
                    <a className="button is-link is-normal" href="https://www.linkedin.com/in/stephenparker-03/" rel="no-follow noreferrer" target="_blank">
                        <span className="icon is-large">
                            <i className="fab fa-github fa-2x" aria-hidden="true"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default RightNav;