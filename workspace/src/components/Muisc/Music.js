import React,{Component} from 'react';
import { Button } from 'antd';

let rotateTimer = 0;
const mus = require('../../resources/testMusic.mp3');

class Music extends Component {
    constructor(props){
        super(props);
        this.state = {
            isPaused:false,
            totalTImer:0,
            playPer:0,
            bufferedPer:0,
            playedLeft:0,
            
        }
    }

    musicPlay = () =>{  
        let audio = this.refs.audio;
        audio.play();
    }

    render(){
       
        return(
            <div>
            <audio src={mus}></audio>
            <Button onClick={this.musicPlay}>play</Button>
            </div>
        )
    }
}

export default Music