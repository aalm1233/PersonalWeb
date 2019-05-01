import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Icon } from 'antd';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from './comp/Home';
import User from './comp/user';

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
      <Router>
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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/user/" >
                <Icon type="user" />
                <span>用户</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>视频</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="customer-service" />
                <span>音乐</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="file-markdown" />
                <span>MD文档</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{
              margin: '24px 16px', padding: 15, background: '#fff', minHeight: 280,
            }}
            ><Router>
              <div>
              <Route path='/' component={Home}></Route>
              <Route path='/User' component={User}></Route>
              </div>
              </Router>
            </Content>
          </Layout>
        </Layout>
      </Layout>
      </div>
      </Router>
    );
  }
}


export default App;
