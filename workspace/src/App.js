import React, { Component } from 'react';
import './App.css';
import { Layout ,Icon } from 'antd';
import {HashRouter} from 'react-router-dom';
import TopMenu from './Menu/TopMenu'
import CustomMenu from './Menu/CustomMenu'
import ContentMain from './components/ContentMain';
import createHistory from 'history/createHashHistory'

const history = createHistory();

const { Header, Sider, Content } = Layout;

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
      <HashRouter>
        <div>
      <Layout >
        <Layout >
          <Header style={{ paddingLeft: 0, paddingRight: 0, height: 40, "-webkit-app-region": "drag" }}>
            <TopMenu/>
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
            <Header style={{ background: '#fff', padding: 0,height:40 }}>
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
      </HashRouter>
    );
  }
}


export default App;
