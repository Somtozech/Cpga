import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="toolbar toolbar-header header">
      <div className="toolbar-actions">
        <div className="btn-group">
          <Link to="/">
            <button className="btn btn-default">
              <span className="icon icon-home" />
              <span className="mx-2">home</span>
            </button>
          </Link>

          <Link to="/sessions">
            <button className="btn btn-default">
              <span className="icon icon-folder" />
              <span className="mx-2">Sessions</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
