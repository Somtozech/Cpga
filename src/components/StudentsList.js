import React, { useState, useEffect } from 'react';

function StudentsList(props) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(window.getStudentsInSession(props.params.session));
  }, [props.params.session, students]);

  return (
    <div className="padded-more student-list">
      <table className="table-striped">
        <thead>
          <tr>
            <th
              colspan={14}
              className="text-center"
              style={{ fontWeight: 600, fontSize: 16 }}
            >
              STUDENTS IN {props.params.session}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th width="5%" className="text-center">
              S/N
            </th>
            <th width="50%">Name</th>
            <th width="40%">Registration Number</th>
            <th width="5%" />
          </tr>
          {students.map((student, i) => (
            <tr key={student.id}>
              <td>{i + 1}</td>
              <td>{student.name}</td>
              <td>{student.regNo}</td>
              <td>
                <a href="">
                  <span className="icon icon-pencil" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsList;
