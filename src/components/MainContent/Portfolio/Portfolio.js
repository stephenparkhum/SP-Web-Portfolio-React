import React, {Component} from 'react';
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
            <> 
            <div className="grid-x grid-padding-x">
                <h2>Portfolio</h2>
                <div className="grid-x">
                    {displayPort}
                </div>

            </div>
          </>
         );
    }
}
 
export default Portfolio;