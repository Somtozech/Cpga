import React, { useState, useEffect } from 'react';

function ResultPage({ match }) {
  const [student, setStudent] = useState({});
  const { params } = match;
  const session = student.session;

  useEffect(() => {
    setStudent(window.findStudentByRegNo(params.session, params.regNo));
  }, [params.regNo, params.session, student, student.session]);

  return (
    <div className="compute padded-more">
      {student.session ? (
        <React.Fragment>
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

          <table className="table">
            {session.map((year, i) => {
              return (
                <React.Fragment key={year.id}>
                  <thead>
                    <tr>
                      <th colSpan="13" className="text-center">
                        {String(year.year).toUpperCase()}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th colSpan="6">FIRST SEMESTER</th>
                      <th colSpan="1" />
                      <th colSpan="6">SECOND SEMESTER</th>
                    </tr>
                    <Row year={year} />
                    <tr height={30} />
                  </tbody>
                </React.Fragment>
              );
            })}
          </table>
          <div className="d-flex summary">
            <div>
              <table>
                <Summary student={student} />
              </table>
            </div>
            <div>
              <div className="d-flex">
                <h5>HEAD OF DEPARTMENT: </h5>
                <hr
                  className="flex mx-2"
                  style={{ borderBottom: '1px dotted #000' }}
                />
              </div>
              <br />
              <div className="d-flex">
                <h5>SIGNATURE: </h5>
                <hr
                  className="flex mx-2"
                  style={{ borderBottom: '1px dotted #000' }}
                />
              </div>
              <br />
              <div className="d-flex">
                <h5>DATE: </h5>
                <hr
                  className="flex mx-2"
                  style={{ borderBottom: '1px dotted #000' }}
                />
              </div>
              <br />
              <div className="text-bold">A=5,B=4,C=3,D=2,F=0</div>
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
}

export default ResultPage;

function Row({ year }) {
  const length = Math.max(year.first.length, year.second.length, 10);
  const initialValue = {
    code: '',
    title: '',
    unit: '',
    score: '',
    grade: '',
    gp: ''
  };
  const arr = new Array(length).fill(0);
  const headers = [
    { label: 'COURSE CODE', width: '5%' },
    { label: 'COURSE TITLE', width: '' },
    { label: 'UNIT', width: '4%', rotateText: true },
    { label: 'SCORE', width: '4%', rotateText: true },
    { label: 'GRADE', width: '4%', rotateText: true },
    { label: 'GP', width: '4%' },
    { label: '', width: '2%' },
    { label: 'COURSE CODE', width: '5%' },
    { label: 'COURSE TITLE', width: '' },
    { label: 'UNIT', width: '4%', rotateText: true },
    { label: 'SCORE', width: '4%', rotateText: true },
    { label: 'GRADE', width: '4%', rotateText: true },
    { label: 'GP', width: '4%' }
  ];

  return (
    <React.Fragment>
      <tr className="course-head">
        {headers.map((header, i) => {
          const className = header.rotateText ? 'rotate-text text-center' : '';
          return (
            <td key={i} width={header.width} className={className}>
              {header.label}
            </td>
          );
        })}
      </tr>
      <React.Fragment>
        {arr.map((a, i) => {
          const first = year.first[i] || initialValue;
          const second = year.second[i] || initialValue;
          return (
            <tr key={i}>
              <td height={20}>{first.code}</td>
              <td>{first.title}</td>
              <td className="text-center">{first.unit}</td>
              <td className="text-center">{first.score}</td>
              <td className="text-center">{first.grade}</td>
              <td className="text-center">{first.gp}</td>
              <td />
              <td>{second.code}</td>
              <td>{second.title}</td>
              <td className="text-center">{second.unit}</td>
              <td className="text-center">{second.score}</td>
              <td className="text-center">{second.grade}</td>
              <td className="text-center">{second.gp}</td>
            </tr>
          );
        })}
      </React.Fragment>
      <tr class="course-summary">
        <td height={20} />
        <td>TOTAL</td>
        <td>{year.total.first.unit}</td>
        <td />
        <td>{year.total.first.grade}</td>
        <td>{year.total.first.gp}</td>
        <td />
        <td height={20} />
        <td>TOTAL</td>
        <td>{year.total.second.unit}</td>
        <td />
        <td>{year.total.second.grade}</td>
        <td>{year.total.second.gp}</td>
      </tr>
    </React.Fragment>
  );
}

function Summary({ student }) {
  return (
    <tbody>
      <tr className="course-summary">
        <td style={{ border: 0 }} />
        <td style={{ border: 0 }}>SUMMARY</td>
      </tr>
      <tr className="course-summary">
        <td style={{ border: 0 }} width="12%" />
        <td>LEVEL</td>
        <td colSpan={2} width="12%">
          TCP
        </td>
        <td colSpan={2} width="12%">
          FCP
        </td>
      </tr>
      {student.session.map(session => (
        <tr>
          <td style={{ border: 0 }} />
          <td>{String(session.year).toUpperCase()}</td>
          <td colSpan={2} className="text-center">
            {session.total.summary.tcp}
          </td>
          <td colSpan={2} className="text-center">
            {session.total.summary.fcp}
          </td>
        </tr>
      ))}
      <tr className="course-summary">
        <td style={{ border: 0 }} />
        <td>TOTAL</td>
        <td colSpan={2} className="text-center">
          {student.total.tcp}
        </td>
        <td colSpan={2} className="text-center">
          {student.total.fcp}
        </td>
      </tr>
      <tr className="course-summary">
        <td style={{ border: 0 }} height={30} />
        <td className="text-center f-18">FCGPA</td>
        <td colSpan={4} className="text-center f-18">
          {student.total.gp}
        </td>
      </tr>
    </tbody>
  );
}
