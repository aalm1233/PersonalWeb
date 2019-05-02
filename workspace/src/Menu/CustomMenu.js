import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Menu,Icon} from 'antd';
global.menus = [
    {
        title:"主页",
        icon:"home",
        key:"/"
    },{
        title:"用户",
        icon:"user",
        key:"/page/User"
    },{
        title:"视频",
        icon:"video-camera",
        key:"/page/Video"
    },{
        title:"音乐",
        icon:"customer-service",
        key:"/page/Music"
    },{
        title:"MD文档",
        icon:"file-markdown",
        key:"/page/Markdown"
    },
];

const menus = global.menus;

class CustomMenu extends Component {
    renderSubMenu = ({key,icon,title,subs}) =>{
        return (
            <Menu.SubMenu key={key} title={
                <span>
                    {icon && <Icon type={icon}></Icon>}
                    <span>{title}</span>
                </span>
            }>
            {
                subs && subs.map(item =>{
                    return item.subs && item.subs.lenth > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                })
            }
        </Menu.SubMenu>
        )

    }
    renderMenuItem = ({key,icon,title,}) =>{
        return (
            <Menu.Item key={key}>
                <Link to={key}>
                    {icon && <Icon type={icon}></Icon>}
                    <span>{title}</span>
                </Link>
            </Menu.Item>
        )
    }
    render(){
        return(
        <Menu 
            theme="dark" 
            mode="inline" 
            defaultSelectedKeys={['1']}
        >
        {
            menus.map(item => {
                return item.subs &&item.subs.lenth > 0 ? this.renderSubMenu(item) :this.renderMenuItem(item) 
            })
        }
        </Menu>
        )
    }
}
export default CustomMenu