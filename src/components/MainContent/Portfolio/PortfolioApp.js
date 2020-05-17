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
            <div class="box">
                <article class="media">
                    <div class="media-left">
                    <figure class="image is-128x128">
                        <img src={this.props.imgSrc} alt={`${this.props.title}`} />
                    </figure>
                    </div>
                    <div class="media-content">
                    <div class="content">
                        <h2 className="title is-6">{this.props.title}</h2> <small>{this.props.year}</small>
                        <p>
                        {this.props.description}
                        </p>
                    </div>
                    <nav class="level is-mobile">
                        <div class="level-left">
                        <a href={this.props.liveLink} class="level-item" aria-label="reply">
                            <span class="icon is-large">
                            <i class="fas fa-globe fa-2x" aria-hidden="true"></i>
                            </span>
                        </a>
                        <a href={this.props.ghLink} class="level-item" aria-label="like">
                            <span class="icon is-large">
                            <i class="fab fa-github fa-2x" aria-hidden="true"></i>
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