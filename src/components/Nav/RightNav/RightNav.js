import React from 'react';
import $ from 'jquery';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function RightNav() {
    return (
        <> 
        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-link is-normal" href="https://github.com/stephenparkhum" rel="no-follow noreferrer" target="_blank">
                        <strong>Github</strong>
                    </a>
                    <a class="button is-info is-outlined" href="https://www.linkedin.com/in/stephenparker-03/" rel="no-follow noreferrer" target="_blank">
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default RightNav;