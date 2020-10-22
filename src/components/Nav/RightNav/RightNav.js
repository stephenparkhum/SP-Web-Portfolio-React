import React from 'react';

function RightNav() {
    return (
        <> 
        <div className="top-bar-right">
            <ul className="menu">
                <li><a className="button is-link is-normal" href="https://www.linkedin.com/in/stephenparker-03/" rel="no-follow noreferrer" target="_blank">
                <span className="icon is-medium">
                    <i className="fab fa-linkedin-in fa-lg" aria-hidden="true"></i>
                </span>
            </a></li>
                <li><a className="button is-link is-normal" href="https://github.com/stephenparkhum" rel="no-follow noreferrer" target="_blank">
                <span className="icon is-medium">
                    <i className="fab fa-github fa-lg" aria-hidden="true"></i>
                </span>
            </a></li>
            </ul>
        </div>
        </>
    )
}

export default RightNav;