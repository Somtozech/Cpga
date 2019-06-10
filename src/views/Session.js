import React from 'react';
import { Router, Route } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import ComputeResult from '../components/ComputeResult';
import UploadCourse from '../components/uploadCourse';
import CourseList from '../components/CourseList';
import StudentsList from '../components/StudentsList';

function SessionPage(props) {
  const url = props.match.url;

  const params = props.match.params;

  return (
    <div className="session window-content">
      <div className="window-content">
        <div className="pane-group">
          <Sidebar match={props.match} />
          <div className="pane">
            <div className="padded-more">
              <Router history={props.history}>
                <Route
                  exact
                  path={`${url}/`}
                  render={props => <ComputeResult {...props} params={params} />}
                />
                <Route
                  path={`${url}/upload`}
                  render={props => <UploadCourse {...props} params={params} />}
                />
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
