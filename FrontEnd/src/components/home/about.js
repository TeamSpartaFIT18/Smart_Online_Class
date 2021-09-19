import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'High Performance',
    content: 'Easy access to Learning materials.',
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Student tracker',
    content: 'Track the progress of the students.',
  },
  {
    key: '3',
    icon: <i className="fas fa-database"></i>,
    title: 'Interactive discussions',
    content: 'Strengthen the interaction between teacher and student.',
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
          <p>Smart Online Class</p>
        </div>
        <div className="contentHolder">
          <p>Online Learning platform to strengthen teacher to student interaction and power up distance learning by online classes and easy access to learning materials.</p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;