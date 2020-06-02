import React from 'react';

function LeftNav() {

    document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
      
          // Add a click event on each of them
          $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
      
              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);
      
              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
      
            });
          });
        }
    });

    return (
        <> 
        <div className="navbar-brand">
            <a className="navbar-item" href="/">
                <h1 className="title is-4 has-text-white-ter">Stephen Parker</h1>
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
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