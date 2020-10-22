import React, {Component} from 'react';

class ToggleFooter extends Component {
    render() { 
        var d = new Date();
        var thisYear = d.getFullYear();

        return ( 
            <>
                <p>
                    Website created with <a href="https://get.foundation/" rel="noopener noreferrer" target="_blank">Foundation</a>, <a href="http://reactjs.org" rel="noopener noreferrer" target="_blank">React</a> and copious amounts of coffee <span>|</span> Stephen Parker &copy; {thisYear}
                </p>
            </>
         );
    }
}
 
export default ToggleFooter;