import React, { useState } from 'react';

function UploadCourse({ params, history, match }) {
  const session = params.session;
  const url = match.url.replace('upload', 'courses');

  function handleChange(e) {
    e.preventDefault();
    window.uploadCourse(session);
    history.push(url);
  }
  return (
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
  );
}

export default UploadCourse;
