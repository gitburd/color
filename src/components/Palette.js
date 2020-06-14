import React, { Component } from 'react';
import ColorBox from './ColorBox';
import {generatePalette} from '../colorHelpers';
import seedColors from '../seedColors';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
                <Slider defaultValue={this.state.level} min={100} max={900} step={100} onAfterChange={this.changeLevel}/>
                <div className='palette-colors'>
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette
