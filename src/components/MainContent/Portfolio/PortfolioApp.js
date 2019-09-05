import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './PortfolioApp.css';

class PortfolioApp extends Component {
    render() { 
        const getTags = this.props.tags.map(tag => {
            return (
                <button className="PortfolioApp-tags" key={`1_${tag}`}>{tag}</button>
            )
        })

        const getLiveLInk = (liveLink) => {
            if (liveLink !== '') {
                return <a href={liveLink}><button><FontAwesomeIcon icon={faGlobe} size="lg" /></button></a>
            } else {
                return <button><FontAwesomeIcon icon={faTimesCircle} size="lg" /></button>
            }
        }

        const getGitLink = (ghLink) => {
            if (ghLink !== '') {
                return <a href={ghLink}><button><FontAwesomeIcon icon={faGithub} size="lg" /></button></a>
            } else {
                return <button><FontAwesomeIcon icon={faTimesCircle} size="lg"/></button>
            }
        }
        
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
                    {getGitLink(this.props.ghLink)}
                    {getLiveLInk(this.props.liveLink)}
                </div>
            </div>
         );
    }
}
 
export default PortfolioApp;