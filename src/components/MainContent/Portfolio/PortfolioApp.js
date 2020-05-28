import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

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
            <>
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-128x128">
                        <img src={this.props.imgSrc} alt={`${this.props.title}`} />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <a href={this.props.liveLink}>
                        <h2 className="title is-5 has-text-info">{this.props.title}</h2> <small>{this.props.year}</small>
                        </a>
                        <p>
                        {this.props.description}
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                        <a href={this.props.liveLink} className="level-item" aria-label={`Live ${this.props.title} website`} rel="noopener noreferrer" target="_blank">
                            <span className="icon is-large">
                            <i className="fas fa-globe fa-2x" aria-hidden="true"></i>
                            </span>
                        </a>
                        <a href={this.props.ghLink} className="level-item" aria-label={`${this.props.title} Github Repo`} rel="noopener noreferrer" target="_blank">
                            <span className="icon is-large">
                            <i className="fab fa-github fa-2x" aria-hidden="true"></i>
                            </span>
                        </a>
                        </div>
                    </nav>
                    </div>
                </article>
            </div>
            </>
         );
    }
}
 
export default PortfolioApp;