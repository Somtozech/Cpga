import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const routes = [
  {
    path: '',
    label: 'Compute Result',
    icon: 'icon icon-window'
  },
  {
    path: 'upload',
    label: 'Upload Courses',
    icon: 'icon icon-upload'
  },
  {
    path: 'courses',
    label: 'Courses List',
    icon: 'icon icon-monitor'
  },
  {
    path: 'students',
    label: 'Students List',
    icon: 'icon icon-signal'
  }
];

function Sidebar({ match }) {
  const [index, setIndex] = useState(0);
  return (
    <div className="pane pane-sm sidebar">
      <nav className="nav-group">
        {routes.map((route, i) => {
          const r =
            match.url[match.url.length - 1] === '/'
              ? match.url
              : match.url + '/';
          const s = r + route.path;
          console.log(s);
          const className = `nav-group-item ${index === i ? 'active' : ''}`;
          return (
            <Link
              to={s}
              key={i}
              onClick={e => {
                setIndex(i);
              }}
            >
              <span className={className}>
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
