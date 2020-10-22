import React from 'react';

function LeftNav() {

    return (
        <> 
        <div class="top-bar-left">
            <ul className="menu">
                <li className="menu-text">Stephen Parker</li>
                <li><a href="/">About</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/music">Music</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        </>
    )
}

export default LeftNav;