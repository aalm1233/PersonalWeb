import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Icon } from 'antd';
import config from './chart/config';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title';

const { Header, Sider, Content } = Layout;

const SubMenu = Menu.SubMenu;

class App extends Component {
  constructor(props) {
    super(props)
    let id = ('_' + Math.random()).replace('.', '_');
    this.state = {
      pieId: 'pie' + id,
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

  initPie = (id) => {
    let mychart = echarts.getInstanceByDom(document.getElementById(id));
    if (mychart === undefined) {
      mychart = echarts.init(document.getElementById(id));
    }
    mychart.setOption(config);
  }

  componentDidMount() {
    this.initPie(this.state.pieId);
    // setTimeout(()=>{
    //   config.series[0].data = [
    //     {value:355,name:'中国'},
    //     {value:310, name:'美国'},
    //     {value:274, name:'英国'},
    //     {value:235, name:'俄罗斯'},
    //     {value:400, name:'法国'}
    //   ].sort(function(a,b){return a.value - b.value;});
    //   this.initPie(this.state.pieId);
    // },1000*5);
  }
  componentWillUpdate() {
    console.log('componentWillUpdate!');
    this.initPie(this.state.pieId);
  }
  render() {
    return (
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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">
                <Icon type="video-camera" />
                <span>视频</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="customer-service" />
                <span>音乐</span>
              </Menu.Item>
              <Menu.Item key="3">
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
            ><div id={this.state.pieId} style={{ margin: '24px 16px', padding: 15, background: '#fff', minHeight: 280, }}>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}


export default App;
