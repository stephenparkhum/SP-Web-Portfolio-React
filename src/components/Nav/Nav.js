import React, {Component} from 'react';
import RightNav from './RightNav/RightNav';
import LeftNav from './LeftNav/LeftNav';

class Nav extends Component {
    render() { 
        return ( 
          <>
              <LeftNav />
              <RightNav />
          </>
            
         );
    }
}
 
export default Nav;