import React, {Component} from 'react';
import LeftNav from '../LeftNav/LeftNav';
import RightNav from '../RightNav/RightNav';

class TopNav extends Component {
    render() { 

        return (
            <>
            <nav className="navbar is-fixed-top has-background-black-ter has-text-white-ter" role="navigation" aria-label="main navigation">
                <div className="container">
                    <LeftNav />
                    <RightNav />
                </div>
            </nav>
            </>
         );
    }
}
 
export default TopNav;