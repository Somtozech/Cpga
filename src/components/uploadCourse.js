import React, { useState, useEffect } from 'react';
import shortid from 'shortid';

function UploadCourse({ params, history, match }) {
  const session = params.session;
  const url = match.url.replace('upload', '');
  const defaultState = [
    { id: shortid.generate(), year: 'year one', first: [], second: [] },
    { id: shortid.generate(), year: 'year two', first: [], second: [] },
    { id: shortid.generate(), year: 'year three', first: [], second: [] },
    { id: shortid.generate(), year: 'year four', first: [], second: [] },
    { id: shortid.generate(), year: 'year five', first: [], second: [] }
  ];
  const [courses, setCourses] = useState(defaultState);

  useEffect(() => {
    const courses = window.getCoursesInSession(params.session);
    if (courses.length > 0) setCourses(courses);
  }, [params.session]);

  //FUNCTION WAS CREATED TO HANDLE UPLOAD OF COURSES VIA EXCEL SHEET
  function handleChange(e) {
    e.preventDefault();
    window.uploadCourse(session);
    history.push(url);
  }
  return (
    <div className="upload-course">
      <div className="compute-result">
        <div className="form-group">
          <label htmlFor="">Choose Excel file for courses</label>
          <input
            type="file"
            name="file"
            id=""
            className="form-control"
            onClick={handleChange}
          />
        </div>
      </div>
      <h5>ENTER SESSIONS COURSES </h5>
      <table className="table" width="100%">
        <tbody>
          {courses.map(course => {
            return (
              <React.Fragment key={course.id}>
                <tr>
                  <th colSpan="3" className="text-center">
                    {course.year.toUpperCase()}
                  </th>
                </tr>
                <tr>
                  <th colSpan="3" className="text-bold">
                    FIRST SEMESTER
                  </th>
                </tr>
                {course.first.map(first => (
                  <tr key={first.id}>
                    <td>{first.code}</td>
                    <td>{first.title}</td>
                    <td>{first.unit}</td>
                  </tr>
                ))}
                <tr>
                  <th colSpan="3" className="text-bold">
                    SECOND SEMESTER
                  </th>
                </tr>
                {course.second.map(second => (
                  <tr key={second.id}>
                    <td>{second.code}</td>
                    <td>{second.title}</td>
                    <td>{second.unit}</td>
                  </tr>
                ))}
                <tr height="30" />
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UploadCourse;
