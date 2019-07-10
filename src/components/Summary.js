import React from 'react';

function Summary({ student }) {
  console.log(student);
  const studentTotal = student.total || {
    tcp: 0,
    fcp: 0,
    gp: 0
  };
  const initialState = {
    summary: {
      tcp: 0,
      fcp: 0
    },
    tcp: 0,
    fcp: 0
  };
  return (
    <tbody>
      <tr>
        <td style={{ border: 0 }} />
        <td style={{ border: 0, fontSize: 12, fontWeight: 'bolder' }}>
          SUMMARY
        </td>
      </tr>
      <tr>
        <td style={{ border: 0 }} width="12%" />
        <td>LEVEL</td>
        <td colSpan={2} width="12%">
          TCP
        </td>
        <td colSpan={2} width="12%">
          FCP
        </td>
      </tr>
      {student.session.map(session => {
        const total = session.total;
        return (
          <tr key={session.id}>
            <td style={{ border: 0 }} />
            <td>{String(session.year).toUpperCase()}</td>
            <td colSpan={2} className="text-center">
              {total.summary.tcp}
            </td>
            <td colSpan={2} className="text-center">
              {total.summary.fcp}
            </td>
          </tr>
        );
      })}
      <tr style={{ fontSize: 12, fontWeight: 'bolder' }}>
        <td style={{ border: 0 }} />
        <td>TOTAL</td>
        <td colSpan={2} className="text-center">
          {studentTotal.tcp}
        </td>
        <td colSpan={2} className="text-center">
          {studentTotal.fcp}
        </td>
      </tr>
      <tr style={{ fontWeight: 'bolder' }}>
        <td style={{ border: 0 }} height={30} />
        <td className="text-center f-18">FCGPA</td>
        <td colSpan={4} className="text-center f-18">
          {studentTotal.gp}
        </td>
      </tr>
    </tbody>
  );
}

export default Summary;
