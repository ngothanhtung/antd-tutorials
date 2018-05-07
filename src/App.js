import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

//import Footer from './components/Footer';
import MainMenu from './components/MainMenu';
import MainSider from './components/MainSider';
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
          <Header style={{ height: '48px' }}>
            <Route path="/:id?" component={PageRoute} />
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <MainSider></MainSider>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 600 }}>
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