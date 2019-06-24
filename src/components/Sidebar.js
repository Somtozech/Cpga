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

function Sidebar({ match, history }) {
  const pathname = history.location.pathname;
  const linkIndex = pathname.lastIndexOf('/');
  const len = -(pathname.length - linkIndex - 1);
  const link = len ? pathname.slice(len) : '/';
  return (
    <div className="pane pane-sm sidebar">
      <nav className="nav-group">
        {routes.map((route, i) => {
          const r =
            match.url[match.url.length - 1] === '/'
              ? match.url
              : match.url + '/';
          const s = r + route.path;
          const path = route.path ? route.path : '/';

          const className = `nav-group-item ${link === path ? 'active' : ''}`;
          return (
            <Link to={s} key={i}>
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
