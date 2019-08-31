import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faNodeJs, faReact} from '@fortawesome/free-brands-svg-icons';
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

        const blue = getComputedStyle(document.documentElement).getPropertyValue('--med-blue');


        return ( 
            <>
            <h2>Portfolio</h2>
            <div className="Portfolio-languages">
                <FontAwesomeIcon icon={faJsSquare} size="2x" color={blue} />
                <FontAwesomeIcon icon={faReact} size="2x" color={blue} />
                <FontAwesomeIcon icon={faNodeJs} size="2x" color={blue} />
            </div>
            {displayPort}
            </>
         );
    }
}
 
export default Portfolio;