import React,{Component} from 'react';
import { Button } from 'antd';

const {ipcRenderer} =window.require('electron');

const fs = require('fs');
class File extends Component {

    openFileDialog(){
        ipcRenderer.send("open-file-dialog");
    }
    render(){
        return(
            <div>
                <Button onClick={this.openFileDialog}>
                    打开文件夹
                </Button>
            </div>
        );
    }
}

export default File;
