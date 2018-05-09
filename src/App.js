import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { Icon } from 'antd';

//import Footer from './components/Footer';
import MainMenu from './components/MainMenu';
import MainSider from './components/MainSider/index';
import Home from './pages/Home/index';
import About from './pages/About/index';
import { Layout, Breadcrumb } from 'antd';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;


class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header style={{ height: '48px', display: 'none' }}>
            <Route path="/:id?" component={PageRoute} />
          </Header>
          <Layout>
            <Sider
              trigger={null}
              collapsible
              collapsed={false}
              breakpoint="lg"
              width={256}
            >
              <MainSider></MainSider>
            </Sider>
            <Layout>
              <Header style={{ padding: 0 }}>
                <div className="header">
                  <Icon
                    className="trigger"
                    type={'menu-fold'}
                  //onClick={this.toggle}
                  />
                  <div style={{ float: 'right' }}>

                  </div>
                </div>
              </Header>
              <Content style={{ padding: '24px', height: '100%' }}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

const PageRoute = ({ match }) => (
  <MainMenu url={match.url} selectedKey={match.url !== '/' ? match.url.replace('/', '') : "home"} />
);


export default App;