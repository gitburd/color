import React, { Component } from 'react'
// import '../style/ColorBox.css'

class ColorBox extends Component {
    render() {
        const {name, background } = this.props
        return (
            <div style={{background}} className='colorBox'>
                <div className="copy-container">

                
                <div className="box-content">
                    <span>{name}</span>
                </div>
                <button className="copy-btn">copy</button>
                <span className="see-more">MORE</span>
                </div>
            </div>
        )
    }
}

export default ColorBox
