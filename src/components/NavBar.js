import React, { Component } from 'react'
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import '../style/Navbar.css';


class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = { format : "hex" }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({format:e.target.value});
        this.props.handleChange(e.target.value);
    }

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
                    <div className="select-contain">
                        <Select value={this.state.format} onChange={this.handleChange}>
                            <MenuItem value="hex">HEX - #ffffff</MenuItem>
                            <MenuItem value="rgb">RBG - rgb(255,255,255)</MenuItem>
                            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
                        </Select>
                    </div>
                </div>
            </nav>        
        )
    }
}

export default NavBar;