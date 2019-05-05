import React,{Component} from 'react';
import './Video.css';
import {Player} from 'video-react';

class Video extends Component{
    constructor(props){
        super(props);
        let id = ('_'+Math.random()).replace('.','_');
        this.state = {
            VideoId : "Video" + id,
        }
    }
    render(){
        return(<div>
            <div id={this.state.VideoId}>
                {/* <Player ref="player" VideoId="video-1">
                <source src={require("../../resources/anime.mp4")}></source>+
                </Player> */}
            </div>
            </div>
        )
    }
}
export default Video
