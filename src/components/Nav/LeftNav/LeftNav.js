import React from 'react';

function LeftNav() {


    return (
        <> 
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <h1 className="title is-4 has-text-white-ter">Stephen Parker</h1>
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item" href="/about">
                            About
                        </a>

                        <a class="navbar-item" href="/portfolio">
                            Portfolio
                        </a>

                        <a class="navbar-item" href="/contact">
                            Contact
                        </a>
                    </div>
                </div>
        </>
    )
}

export default LeftNav;