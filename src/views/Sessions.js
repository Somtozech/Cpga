import React from 'react';
import { Link } from 'react-router-dom';

function SessionsPage() {
  return (
    <div className="padded-more sessions">
      <ul className="list-group">
        <li className="list-group-header">
          <h3>ALL AVAILABLE SESSIONS</h3>
        </li>
        <li class="list-group-item">
          <p>
            <Link to="/session/">2019/2020 session</Link>
          </p>
        </li>
        <li class="list-group-item">
          <p>
            <Link to="/session/">2018/2019 session</Link>
          </p>
        </li>
        <li class="list-group-item">
          <p>
            <Link to="/session/">2017/2018 session</Link>
          </p>
        </li>
        <li class="list-group-item">
          <p>
            <Link to="/session/">2016/2017 session</Link>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default SessionsPage;
