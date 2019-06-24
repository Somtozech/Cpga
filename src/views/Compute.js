import React, { useState, createRef, useEffect } from 'react';
// import sessions from './sessionss';
import TableRow from '../components/TableRow';
import shortid from 'shortid';

const root = createRef();

function CreateSessionPage(props) {
  const [sessions, setSession] = useState([]);
  const [student, setStudent] = useState({});
  const { params } = props.match;

  useEffect(() => {
    const studentSession =
      student.session && student.session.length ? student.session : null;
    setStudent(window.findStudentByRegNo(params.session, params.regNo));
    setSession(
      JSON.parse(localStorage.getItem('sessions')) ||
        studentSession ||
        window.getCoursesInSession(params.session)
    );

    return () => {
      const scores = JSON.parse(localStorage.getItem('sessions'));
      if (scores && params.session && student.id) {
        window.saveStudentsResult(params.session, student.id, scores);
        localStorage.clear();
      }
    };
  }, [params.regNo, params.session, student]);

  const handleCellChange = id => ({ semester, row, type, value }) => {
    const updatedSessions = [...sessions];
    const session = sessions.find(session => session.id === id);
    const index = sessions.findIndex(session => session.id === id);
    if (!session[semester][row]) {
      session[semester] = [
        ...session[semester],
        {
          id: shortid.generate(),
          code: '',
          title: '',
          unit: '',
          score: ''
        }
      ];
    }
    session[semester][row][type] = value;
    updatedSessions[index] = session;
    localStorage.setItem('sessions', JSON.stringify(updatedSessions));
  };

  const handleSave = e => {
    console.log('save');
    const scores = JSON.parse(localStorage.getItem('sessions'));
    if (scores) {
      window.saveStudentsResult(params.session, student.id, scores);
      localStorage.clear();
    }
  };

  const handleViewResult = e => {
    e.preventDefault();
    handleSave(e);
    props.history.push(`/session/${params.session}/${params.regNo}/print`);
  };

  return (
    <div className="compute padded-more">
      <div className="save">
        <button
          className="btn mx-2 btn-large btn-positive pull-right"
          onClick={handleViewResult}
        >
          View Result
        </button>
        <button
          className="btn btn-large btn-positive pull-right"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <div className="student-info">
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

      <table className="table" ref={root}>
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
                <TableRow
                  year={session}
                  handleCellChange={handleCellChange(session.id)}
                />
                <tr style={{ height: 40 }} />
              </tbody>
            </React.Fragment>
          );
        })}
      </table>
    </div>
  );
}

export default CreateSessionPage;
