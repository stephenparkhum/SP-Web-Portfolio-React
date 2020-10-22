import React, {Component} from 'react';

class PortfolioApp extends Component {
    render() { 
        
        return ( 
            <div className="cell large-4 portfolio-cards">
                <div class="card" style={{width:'300px'}}>
                    <img src={this.props.imgSrc} alt={`${this.props.title}`} />
                    <div class="card-section">
                        <a href={this.props.liveLink} rel="noopener noreferrer" target="_blank">
                            <h5>{this.props.title}<small>{this.props.year}</small></h5>
                        </a>
                        <p>
                            {this.props.description}
                        </p>
                        <div className="card-footer">
                            <ul className="menu expanded">
                                <li>
                                    <a href={this.props.liveLink} className="level-item" aria-label={`Live ${this.props.title} website`} rel="noopener noreferrer" target="_blank">
                                        <span className="icon is-large">
                                        <i className="fas fa-globe fa-2x" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href={this.props.ghLink} className="level-item" aria-label={`${this.props.title} Github Repo`} rel="noopener noreferrer" target="_blank">
                                        <span className="icon is-large">
                                        <i className="fab fa-github fa-2x" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default PortfolioApp;