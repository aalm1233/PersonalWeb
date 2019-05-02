import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Icon } from 'antd';
import {BrowserRouter} from 'react-router-dom';
import CustomMenu from './Menu/CustomMenu'
import ContentMain from './components/ContentMain';

const { Header, Sider, Content } = Layout;

const SubMenu = Menu.SubMenu;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  closeWindow = () => {
    window.opener = null;
    window.open('', '_self');
    window.close();
  };

  render() {
    return (
      <BrowserRouter>
        <div>
      <Layout >
        <Layout >
          <Header style={{ paddingLeft: 0, paddingRight: 0, height: 70, "-webkit-app-region": "drag" }}>
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
          </Header>
        </Layout>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <CustomMenu/>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{ padding: 0, background: '#fff', minHeight: 280,
            }}
            >
              <ContentMain></ContentMain>
            </Content>
          </Layout>
        </Layout>
      </Layout>
      </div>
      </BrowserRouter>
    );
  }
}


export default App;
