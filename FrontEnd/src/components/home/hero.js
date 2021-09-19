import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Smart online learning platform',
    content: 'A platform developed to support distance learning and save money ane time.',
  },
  {
    key: '2',
    title: 'Online tuition sessions',
    content: 'Interactive online sessions supporting teacher-to-student communication .',
  },
  {
    key: '3',
    title: 'Easy access to learning materials',
    content: 'Student can access the tutorials and previous online class recordings.',
  },
]

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">Learn More</Button>
                  <Button size="large"><i className="fas fa-desktop"></i> Watch a Demo</Button>
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;