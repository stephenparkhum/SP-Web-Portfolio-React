import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import MainContent from '../MainContent/MainContent';
import TopNav from '../Nav/TopNav/TopNav';
import RightNav from '../Nav/RightNav/RightNav';
import Portfolio from '../MainContent/Portfolio/Portfolio';
import About from '../MainContent/About/About';
import Contact from '../MainContent/Contact/Contact';
import './App.css';

class App extends Component {
  render() { 
    return ( 
        <div className="App">
          <header className="App-header">
          <Route path="/" component={TopNav} />
          </header>
          <aside>
            <Route path='/' component={RightNav} />
          </aside>
          <main>
            <Route exact path="/" component={MainContent} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
          </main>
          
      </div>
     );
  }
}

export default App;
