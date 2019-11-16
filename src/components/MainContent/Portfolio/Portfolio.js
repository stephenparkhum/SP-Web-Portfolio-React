import React, {Component} from 'react';
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
                    key={app.id}
                />
            )
        });

        return ( 
            <div className="Portfolio-main">
                <h2>Portfolio</h2>
                {displayPort}
            </div>
         );
    }
}
 
export default Portfolio;