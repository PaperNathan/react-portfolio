import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'


class Header extends Component {
    state = {
        words: ['creative', 'builder', 'talented', 'experiment', 'clever', 'quick'],
        displayWord: 'clever',
    }

    componentDidMount() {
        this.wordChanger = setInterval(
        () => this.changeWord(), 10000);
    }
    
    componentWillUnmount() {
        clearInterval(this.wordChanger);
    }

    changeStyle = () => {
    }
    
    changeWord = () => {
        this.setState({
            displayWord: this.state.words[Math.floor(Math.random() * this.state.words.length)],
        });
    }

    render() {
        return (<div>
        <h1 style={this.state.style} className='heading-background'>{this.state.displayWord.toUpperCase()}</h1>
            <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade></h1>
            </header>
            <Fade bottom>
                <p className='header-title'>
                    {data.headerTagline[0]}<br></br>
                    {data.headerTagline[1]}<br></br>
                    {data.headerTagline[2]}<br></br>
                    <a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" ><button>Contact</button></a>
                </p>
            </Fade>



        </div>);
    }
}

export default Header;
