import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.scss';
import App from './components/App/App';

ReactDOM.render(
    <BrowserRouter>
    <div className="has-text-white-ter has-background-dark">
        <App />
    </div>
    </BrowserRouter>,

    document.getElementById('root')
    );
