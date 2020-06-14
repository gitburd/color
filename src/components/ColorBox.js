import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state={copied : false}
        this.onCopy = this.onCopy.bind(this);
    }

    onCopy(){
        console.log('onCopy clicked')
        this.setState({copied:true}, ()=>{
            setTimeout(()=> this.setState({copied:false}), 1500);
        })
    } 

    render() {
        const {name, background } = this.props;
        const {copied} = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.onCopy}>
                <div style={{background}} className='colorBox'>
                    <div 
                        style={{background}} 
                        className={copied ? 'copy-overlay show' : 'copy-overlay'}
                    /> 

                    <div className={copied ? 'copy-msg show' : 'copy-msg'}>
                        <h1>copied!</h1>
                        <p>{background}</p>
                    </div>

                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button className="copy-btn">copy</button>
                    <span className="see-more">MORE</span>
                    </div>
                
            </CopyToClipboard>
        )
    }
}

export default ColorBox
