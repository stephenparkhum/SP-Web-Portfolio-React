import React, {Component} from 'react';
import 'react-bulma-components/basic/react-bulma-components.min.css';
  import { NavBar, Container, Hero, Section } from 'react-bulma-components/dist';
import TopNav from './TopNav/TopNav';
import RightNav from './RightNav/RightNav';

class Nav extends Component {
    render() { 
        return ( 
            <>
            <TopNav />
            </>
            
         );
    }
}
 
export default Nav;