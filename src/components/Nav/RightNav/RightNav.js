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
                        <strong>Github</strong>
                    </a>
                    <a className="button is-info is-outlined" href="https://www.linkedin.com/in/stephenparker-03/" rel="no-follow noreferrer" target="_blank">
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default RightNav;