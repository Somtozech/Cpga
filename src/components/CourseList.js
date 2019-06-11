import React, { useState, useEffect } from 'react';

function CourseList(props) {
  const [session, setSession] = useState([]);

  useEffect(() => {
    setSession(window.getCoursesInSession(props.params.session));
  }, [props.params.session, session]);
  return (
    <div className="course-list padded-more">
      {session.map(year => {
        return (
          <table className="table-striped" key={year.id}>
            <thead>
              <tr>
                <th colSpan={3} className="text-center">
                  {year.year.toUpperCase()}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colSpan={3}>FIRST SEMESTER</th>
              </tr>
              {year.first.map(course => (
                <React.Fragment key={course.id}>
                  <tr>
                    <td>{course.code}</td>
                    <td>{course.title}</td>
                    <td>{course.unit}</td>
                  </tr>
                </React.Fragment>
              ))}
              <tr>
                <th colSpan={3}>SECOND SEMESTER</th>
              </tr>
              {year.second.map(course => (
                <React.Fragment key={course.id}>
                  <tr>
                    <td>{course.code}</td>
                    <td>{course.title}</td>
                    <td>{course.unit}</td>
                  </tr>
                </React.Fragment>
              ))}
              <tr style={{ height: 30 }} />
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default CourseList;
