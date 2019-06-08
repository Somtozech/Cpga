import React, { useState, createRef, useEffect } from 'react';
import session from './sessionss';
import TableRow from '../components/TableRow';

const root = createRef();

function CreateSessionPage(props) {
  const years = Object.keys(session);

  const [table, setTable] = useState('');

  useEffect(() => setTable(root.current), [table]);

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

export default CreateSessionPage;
