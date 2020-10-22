import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import MainContent from '../MainContent/MainContent';
import Nav from '../Nav/Nav';
import Portfolio from '../MainContent/Portfolio/Portfolio';
import Music from '../Music/Music';
import Contact from '../MainContent/Contact/Contact';
import ToggleFooter from '../Footer/Footer';

// Foundation Imports
import '../../../node_modules/foundation-sites/js/foundation.core.js';
import '../../../node_modules/foundation-sites/js/foundation.tabs.js';
import '../../../node_modules/foundation-sites/js/foundation.reveal.js';
import '../../../node_modules/foundation-sites/js/foundation.js';

class App extends Component {
  render() { 
    console.log(`Hey! Thanks for stopping by and checking out my portfolio. Feel free to contact me directly for any help with your site!\n\nStephen Parker\n\nstephenparkhum@outlook.com`)


    return ( 
        <div className="App">
          <div className="top-bar">
            <Route path="/" component={Nav} />
          </div>
          <main className="grid-container">
            <section>
              <div className="container">
                <Route exact path="/" component={MainContent} />
                <Route path="/contact" component={Contact} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/music" component={Music} />
              </div>
            </section>
          </main>
          <footer className="footer">
            <ToggleFooter />
          </footer>
      </div>
     );
  }
}

export default App;
