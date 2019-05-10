import React,{Component} from 'react';
import {Menu} from 'antd';

const electron = window.require('electron');

const {ipcRenderer} = electron;

const SubMenu = Menu.SubMenu;
class TopMenu extends Component{
  closeWindow = () => {
    ipcRenderer.send('close', 'close window')
  };

    render(){
        return(
            <Menu
            theme="light"
            mode="horizontal"
          >
            <SubMenu style={{ "-webkit-app-region": "no-drag" }} title={<span className="submenu-title-wrapper">菜单</span>}>
              <Menu.Item key="exit" onClick={this.closeWindow}>退出</Menu.Item>
            </SubMenu>
            <SubMenu style={{ "-webkit-app-region": "no-drag" }} title={<span className="submenu-title-wrapper">帮助</span>}>
              <Menu.Item key="guanyu">关于</Menu.Item>
            </SubMenu>
            <Menu.Item style={{ position: "absolute", top: 0, right: 0, "-webkit-app-region": "no-drag" }} onClick={this.closeWindow}>close</Menu.Item>
          </Menu>
        )
    }
}
export default TopMenu;