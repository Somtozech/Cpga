import React from 'react';
import { Router, Route } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import ComputeResult from '../components/ComputeResult';
import UploadCourse from '../components/uploadCourse';
import CourseList from '../components/CourseList';
import StudentsList from '../components/StudentsList';

function SessionPage(props) {
  const url = props.match.url;

  return (
    <div className="session window-content">
      <div className="window-content">
        <div className="pane-group">
          <Sidebar match={props.match} />
          <div className="pane">
            <div className="padded-more">
              <Router history={props.history}>
                <Route exact path={`${url}/`} component={ComputeResult} />
                <Route path={`${url}/upload`} component={UploadCourse} />
                <Route path={`${url}/courses`} component={CourseList} />
                <Route path={`${url}/students`} component={StudentsList} />
              </Router>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SessionPage;
