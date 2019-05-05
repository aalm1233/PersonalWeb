import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Menu,Icon} from 'antd';
import {menuData} from '../data/MenuData.json'

const menus = menuData;

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