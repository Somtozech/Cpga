import React from 'react';

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
        <tr key={session.id}>
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

export default Summary;
