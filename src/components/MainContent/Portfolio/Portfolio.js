import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Portfolio.css';
import portfolioStore from './portfolio-store';
import PortfolioApp from './PortfolioApp';

class Portfolio extends Component {
    render() { 
        const displayPort = portfolioStore.map(app => {
            return (
                <PortfolioApp 
                    title={app.title}
                    description={app.description}
                    tags={app.tags}
                    imgSrc={app.imgSrc}
                    liveLink={app.liveLink}
                    ghLink={app.ghLink}
                />
            )
        });


        return ( 
            <>
            <h2>Portfolio</h2>
            {displayPort}
            </>
         );
    }
}
 
export default Portfolio;