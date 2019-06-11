import React from 'react';

function TableRow({ year }) {
  const length = Math.max(year['first'].length, year['second'].length, 10);
  const arr = new Array(length).fill(0);
  return (
    <React.Fragment>
      <tr className="course-head">
        <td width="5%">COURSE CODE</td>
        <td>COURSE TITLE</td>
        <td width="4%" className="rotate-text text-center">
          UNIT
        </td>
        <td width="4%" className="rotate-text text-center">
          SCORE
        </td>

        <td width="2%" />
        <td width="5%">COURSE CODE</td>
        <td>COURSE TITLE</td>
        <td width="4%" className="rotate-text text-center">
          UNIT
        </td>
        <td width="4%" className="rotate-text text-center">
          SCORE
        </td>
      </tr>
      <React.Fragment>
        {arr.map((f, i) => {
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
              <td contentEditable="true" className="text-center">
                {first.unit}
              </td>
              <td contentEditable="true" className="text-center">
                {first.score}
              </td>
              <td />
              <td contentEditable="true">{second.code}</td>
              <td contentEditable="true">{second.title}</td>
              <td contentEditable="true" className="text-center">
                {second.unit}
              </td>
              <td contentEditable="true" className="text-center">
                {second.score}
              </td>
            </tr>
          );
        })}
      </React.Fragment>
    </React.Fragment>
  );
}

export default TableRow;
