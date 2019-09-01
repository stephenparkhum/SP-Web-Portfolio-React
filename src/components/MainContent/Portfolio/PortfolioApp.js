import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './PortfolioApp.css';

class PortfolioApp extends Component {
    render() { 
        const getTags = this.props.tags.map(tag => {
            return (
                <button className="PortfolioApp-tags" key={`1_${tag}`}>{tag}</button>
            )
        })
        
        return ( 
            <div className="PortfolioApp-main">
                <img src={this.props.imgSrc} alt={`${this.props.title}`}/>
                <div className="PortfolioApp-info">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                    <div className="PortfolioApp-tags">
                        {getTags}
                    </div>
                </div>
                <div className="PortfolioApp-links">
                    <a href={this.props.ghLink}><button><FontAwesomeIcon icon={faGithub} size="lg" /></button></a>
                    <a href={this.props.liveLink}><button><FontAwesomeIcon icon={faGlobe} size="lg" /></button></a>
                </div>
            </div>
         );
    }
}
 
export default PortfolioApp;