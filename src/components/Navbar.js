import React, { Component } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() { 
        return (<nav>
            <ul>
                <li><ScrollLink
                    className='link'
                    activeClass="active"
                    to="homw"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}
                >Home</ScrollLink></li>
                <li><ScrollLink
                    className='link'
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >About</ScrollLink></li>
                <li><ScrollLink
                    className='link'
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Work</ScrollLink></li>
                <li><ScrollLink
                    className='link'
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Contact</ScrollLink></li>
            </ul>
        </nav> );
    }
}
 
export default Navbar;
