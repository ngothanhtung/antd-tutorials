import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;

export default class About extends Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item, index) => (
            <Col span={3}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
};
