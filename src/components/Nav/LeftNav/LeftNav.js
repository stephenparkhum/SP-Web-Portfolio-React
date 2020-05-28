import React from 'react';

function LeftNav() {
    let hamburgerBtn = document.getElementsByClassName('navbar-burger');

    let hamburgerClick = (e) => {
        if (e.classList.contains('is-active')) {
            e.classList.remove('is-active');
        } else {
            e.classList.add('is-active');
        }
    }

    return (
        <> 
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <h1 className="title is-4 has-text-white-ter">Stephen Parker</h1>
            </a>

            <a role="button" class="navbar-burger burger" onClick={hamburgerClick} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item" href="/">
                    About
                </a>

                <a className="navbar-item" href="/portfolio">
                    Portfolio
                </a>

                <a className="navbar-item" href="/contact">
                    Contact
                </a>
            </div>
        </div>
        </>
    )
}

export default LeftNav;