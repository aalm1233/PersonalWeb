import React,{Component} from 'react';
import flvjs from 'flv.js';

const flvPlayer = flvjs.createPlayer({
    type: 'mp4',
url:'../resources/anime.mp4',
});
class Vedio extends Component{
    constructor(props){
        super(props);
        let id = ('_'+Math.random()).replace('.','_');
        this.state = {
            vedioId : "Vedio" + id,
        }
    }
    createVedio = (id) =>{
        var vedioElement = document.getElementById(id);
        var flvPlayer = flvjs.createPlayer({
            type: 'mp4',
        url:'../resources/anime.mp4',
        });
        flvPlayer.attachMediaElement(vedioElement);
        flvPlayer.load();
        flvPlayer.play();
    }
        render(){
            return(
                <div id={this.state.vedioId}>
                </div>
            )
        }
}
export default Vedio
