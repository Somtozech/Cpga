import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="toolbar toolbar-header header">
      <div className="toolbar-actions">
        <div className="btn-group">
          <button className="btn btn-default">
            <span className="icon icon-home" />{' '}
            <span className="mx-2">
              <Link to="/">Home</Link>
            </span>
          </button>
          <button className="btn btn-default">
            <span className="icon icon-folder" />
            <span className="mx-2">
              <Link to="/sessions">Sessions</Link>
            </span>
          </button>
        </div>
        <button className="btn  pull-right">
          <span className="icon icon-cancel " style={{ fontSize: 20 }} />
        </button>
      </div>
    </header>
  );
}

export default Header;
