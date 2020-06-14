import React, { Component } from 'react'
import Slider from 'rc-slider';
import '../style/Navbar.css'

class NavBar extends Component {
    render() {
        const {level, changeLevel} = this.props
        return (
            <nav className='navbar'>
                <div className="logo">
                    <a href="#">reactcolorpicker</a>
                </div>
                <div className='slider-container'>
                    <span>LEVEL: {level}</span>
                    <div className="slider">
                        <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel}/>
                    </div>
                </div>
            </nav>        
        )
    }
}

export default NavBar;