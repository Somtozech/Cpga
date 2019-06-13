import React, { useState, useEffect } from 'react';

function CreateSessionPage({ match }) {
  const [student, setStudent] = useState({});
  const { params } = match;

  useEffect(() => {
    setStudent(window.findStudentByRegNo(params.session, params.regNo));
  }, [params.regNo, params.session]);
  return (
    <div className="compute padded-more">
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

      <table class="table">
        {[].map((year, i) => {
          return (
            <React.Fragment key={i}>
              <thead>
                <tr>
                  <th colSpan="13" className="text-center">
                    {year}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colSpan="7">FIRST SEMESTER</th>
                  <th colSpan="6">SECOND SEMESTER</th>
                </tr>
                <TableRow year={student.session} />
              </tbody>
            </React.Fragment>
          );
        })}
      </table>
    </div>
  );
}

function TableRow({ year }) {
  const length = Math.max(year['first'].length, year['second'].length, 10);
  const arr = new Array(length).fill(0);
  const headers = [
    { label: 'COURSE CODE', width: '5%' },
    { label: 'COURSE TITLE', width: '' },
    { label: 'UNIT', width: '4%' },
    { label: 'SCORE', width: '4%' },
    { label: '', width: '2%' },
    { label: 'COURSE CODE', width: '5%' },
    { label: 'COURSE TITLE', width: '' },
    { label: 'UNIT', width: '4%' },
    { label: 'SCORE', width: '4%' }
  ];
  const initialValue = {
    code: '',
    title: '',
    unit: '',
    score: ''
  };

  return (
    <React.Fragment>
      <tr className="course-head">
        {headers.map((header, i) => (
          <td key={i} width={header.width}>
            {header.label}
          </td>
        ))}
      </tr>
      <React.Fragment>
        {arr.map((f, i) => {
          const first = year['first'][i] || initialValue;
          const second = year['second'][i] || initialValue;
          return (
            <tr key={i}>
              <td>{first.code}</td>
              <td>{first.title}</td>
              <td>{first.unit}</td>
              <td>{first.score}</td>
              <td />
              <td>{second.code}</td>
              <td>{second.title}</td>
              <td>{second.unit}</td>
              <td>{second.score}</td>
            </tr>
          );
        })}
      </React.Fragment>
    </React.Fragment>
  );
}

export default CreateSessionPage;
