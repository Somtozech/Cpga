import React from 'react';

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
      <tr className="course-summary">
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

export default Row;
