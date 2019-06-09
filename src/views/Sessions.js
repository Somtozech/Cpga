import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SessionsPage() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    setSessions(window.getSessions());
  }, [sessions]);

  return (
    <div className="padded-more sessions">
      <ul className="list-group">
        <li className="list-group-header">
          <h3>ALL AVAILABLE SESSIONS</h3>
        </li>
        {Object.keys(sessions).map((session, i) => {
          return (
            <li class="list-group-item" key={i}>
              <p>
                <Link to={`/session/${session}`}>{session} session</Link>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SessionsPage;
