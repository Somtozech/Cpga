import React, { useState, createRef, useEffect } from 'react';
// import sessions from './sessionss';
import TableRow from '../components/TableRow';

const root = createRef();

function CreateSessionPage(props) {
  const [sessions, setSession] = useState([]);
  const [student, setStudent] = useState({});
  const { params } = props.match;

  const [table, setTable] = useState('');

  console.table(sessions);

  useEffect(() => {
    setSession(window.getCoursesInSession(params.session));
    setStudent(window.findStudentByRegNo(params.session, params.regNo));
    setTable(root.current);
  }, [params.regNo, params.session, table]);

  return (
    <div className="compute padded-more">
      <div className="student-info ">
        <div className="d-flex">
          <h5 className="flex">
            NAME OF STUDENT: {String(student.name).toUpperCase()}
          </h5>
          <h5 className="flex">REG NO: {student.regNo}</h5>
        </div>
        <div className="d-flex">
          <h5 className="flex">MODE OF ENTRY: {student.mode_of_entry}</h5>
          <h5 className="flex">
            STATE OF ORIGIN: {String(student.state).toUpperCase()}
          </h5>
        </div>
      </div>

      <table class="table" ref={root}>
        {sessions.map((session, i) => {
          return (
            <React.Fragment key={i}>
              <thead>
                <tr>
                  <th colSpan="13" className="text-center">
                    {String(session.year).toUpperCase()}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colSpan="4">FIRST SEMESTER</th>
                  <th colSpan="1" />
                  <th colSpan="4">SECOND SEMESTER</th>
                </tr>
                <TableRow year={session} />
                <tr style={{ height: 40 }} />
              </tbody>
            </React.Fragment>
          );
        })}
      </table>
      <div className="btn">
        <button className="btn btn-positive pull-right">Upload</button>
      </div>
    </div>
  );
}

export default CreateSessionPage;
