import React, {Component} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faJsSquare, faNodeJs, faReact} from '@fortawesome/free-brands-svg-icons';
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

        // const portLanguages = () => {
        //     return (
        //         <div className="Portfolio-languages">
        //             <FontAwesomeIcon icon={faJsSquare} size="4x" color={blue} />
        //             <FontAwesomeIcon icon={faReact} size="4x" color={blue} />
        //             <FontAwesomeIcon icon={faNodeJs} size="4x" color={blue} />
        //         </div>
        //     )
        // } 

        // const blue = getComputedStyle(document.documentElement).getPropertyValue('--med-blue');


        return ( 
            <div className="Portfolio-main">
                <h2>Portfolio</h2>
                {displayPort}
            </div>
         );
    }
}
 
export default Portfolio;