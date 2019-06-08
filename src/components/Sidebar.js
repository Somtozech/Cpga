import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const routes = [
  {
    path: '/session',
    label: 'Compute Result',
    icon: 'icon icon-window'
  },
  {
    path: '/session/upload',
    label: 'Upload Courses',
    icon: 'icon icon-upload'
  },
  {
    path: '/session/courses',
    label: 'Courses List',
    icon: 'icon icon-monitor'
  },
  {
    path: '/session/students',
    label: 'Students List',
    icon: 'icon icon-signal'
  }
];

function Sidebar() {
  const [index, setIndex] = useState(0);
  return (
    <div className="pane pane-sm sidebar">
      <nav className="nav-group">
        {routes.map((route, i) => {
          const className = `nav-group-item ${index === i ? 'active' : ''}`;
          return (
            <Link to={route.path} key={i}>
              <span className={className} onClick={e => setIndex(i)}>
                <span className={route.icon} />
                <span className="mx-2">{route.label}</span>
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;
