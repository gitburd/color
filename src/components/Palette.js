import React, { Component } from 'react';
import ColorBox from './ColorBox';
import {generatePalette} from '../colorHelpers';
import NavBar from './NavBar';




class Palette extends Component {
    constructor(props){
        super(props);
        this.state = { level: 500};
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(level){
        this.setState({level})
    }
    render() {
        const {colors} = this.props.palette;
        const{level} = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name} key={color.hex}/>
            )   
        )
        return (
            <div className='palette'>
                <NavBar level={level} changeLevel={this.changeLevel}/>
                <div className='palette-colors'>
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette
