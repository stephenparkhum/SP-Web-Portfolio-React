import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';

// Components
import MainContent from '../MainContent/MainContent';
import LeftNav from '../LeftNav/LeftNav';
import AboutMe from '../AboutMe/AboutMe';

class App extends Component {
  render() { 
    return ( 
        <div className="App">
        <Route path="/">
          <aside>
            <LeftNav />
          </aside>
        </Route>
          <main>
            <div className="MainContent">
            <Route path="/">
              <AboutMe />
            </Route>
            </div>
          </main>
      </div>
     );
  }
}

export default App;
