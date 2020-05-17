import React, {Component} from 'react';

class ToggleFooter extends Component {
    render() { 
        var d = new Date();
        var thisYear = d.getFullYear();

        return ( 
            <>
            <div className="content is-small container has-text-center-mobile has-text-left-desktop">
                <p>
                    Website created with <a href="https://bulma.io/">Bulma</a>, <a href="http://reactjs.org">React</a> and copious amounts of coffee <span>//</span> Stephen Parker &copy; {thisYear}
                </p>
            </div>
            </>
         );
    }
}
 
export default ToggleFooter;