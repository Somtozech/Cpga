import React, { useState, createRef, useEffect } from 'react';
import session from './sessionss';

const root = createRef();

function CreateSessionPage(props) {
  const years = Object.keys(session);

  const [table, setTable] = useState('');

  useEffect(() => setTable(root.current), [table]);
  console.log(table);
  return (
    <div className="compute padded-more">
      <div className="student-info ">
        <div className="d-flex">
          <h5 className="flex">NAME OF STUDENT: EZECHI NNAEMEKA</h5>
          <h5 className="flex">REG NO: 2015030171355</h5>
        </div>
        <div className="d-flex">
          <h5 className="flex">MODE OF ENTRY: UTME</h5>
          <h5 className="flex">STATE OF ORIGIN: ENUGU</h5>
        </div>
      </div>

      <table class="table" ref={root}>
        {years.map((year, i) => {
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
                  <th colSpan="4">FIRST SEMESTER</th>
                  <th colSpan="1" />
                  <th colSpan="4">SECOND SEMESTER</th>
                </tr>
                <TableRow year={session[year]} />
                <tr style={{ height: 40 }} />
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
  return (
    <React.Fragment>
      <tr className="course-head">
        <td width="5%">COURSE CODE</td>
        <td>COURSE TITLE</td>
        <td width="4%" className="rotate-text">
          UNIT
        </td>
        <td width="4%" className="rotate-text">
          SCORE
        </td>

        <td width="2%" />
        <td width="5%">COURSE CODE</td>
        <td>COURSE TITLE</td>
        <td width="4%" className="rotate-text">
          UNIT
        </td>
        <td width="4%" className="rotate-text">
          SCORE
        </td>
      </tr>
      <React.Fragment>
        {arr.map((f, i) => {
          console.log(f);
          const first = year['first'][i] || {
            code: '',
            title: '',
            unit: '',
            score: ''
          };
          const second = year['second'][i] || {
            code: '',
            title: '',
            unit: '',
            score: ''
          };
          return (
            <tr key={i}>
              <td contentEditable="true">{first.code}</td>
              <td contentEditable="true">{first.title}</td>
              <td contentEditable="true">{first.unit}</td>
              <td contentEditable="true">{first.score}</td>
              <td />
              <td contentEditable="true">{second.code}</td>
              <td contentEditable="true">{second.title}</td>
              <td contentEditable="true">{second.unit}</td>
              <td contentEditable="true">{second.score}</td>
            </tr>
          );
        })}
      </React.Fragment>
    </React.Fragment>
  );
}

export default CreateSessionPage;
