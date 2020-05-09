import React from 'react';
import {NavLink} from 'react-router-dom';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function RightNav() {
    const blue = getComputedStyle(document.documentElement).getPropertyValue('--med-blue');

    const gitIcon = <FontAwesomeIcon icon={faGithub} color={blue} size="2x"/>;
    const linkedIcon = <FontAwesomeIcon icon={faLinkedin} color={blue} size="2x"/>;

    

    return (
        <> 
        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-link is-normal" href="https://github.com/stephenparkhum" rel="no-follow" target="_blank">
                        <strong>Github</strong>
                    </a>
                    <a class="button is-info is-outlined" href="https://www.linkedin.com/in/stephenparker-03/" rel="no-follow" target="_blank">
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default RightNav;