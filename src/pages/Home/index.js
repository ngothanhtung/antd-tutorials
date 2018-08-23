import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Link to="/about">
          About
        </Link>
      </div>
    )
  }
};
