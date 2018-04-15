import React, { Component } from 'react';
import { Button, Icon, Row, Col } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col span={12}>
            <Button type="primary">Button</Button>
          </Col>
          <Col span={12}>
            <Icon type="link" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;