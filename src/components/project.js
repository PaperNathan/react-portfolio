import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import { Link } from 'react-router-dom';

class Project extends Component {
    state = {  }

    renderLink = () => {
        if (this.props.isExternal) {
            return (
                <a href={this.props.url}>
                    <img src={this.props.imageSrc} alt={this.props.title}></img>
                </a>
            ) 
            } else {
                return (
                    <Link to={this.props.url}>
                        <img src={this.props.imageSrc} alt={this.props.title}></img>
                    </Link>
                )
            }
        }

    render() { 
        return ( 
        <Fade bottom>
        <div className='project'>
            {this.renderLink()}
                <h1>{this.props.title}</h1>
                <span>{this.props.service}</span>
        </div> 
            </Fade>);
    }
}
 
export default Project;
