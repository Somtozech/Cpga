import React, { useState } from 'react';

function UploadCourse() {
  return (
    <div className="compute-result">
      <form action="">
        <h3>Upload Courses</h3>
        <div className="form-group">
          <label htmlFor="">Choose Excel file for courses</label>
          <input type="file" name="" id="" className="form-control" />
        </div>
        <button type="submit" className="btn btn-positive">
          Upload
        </button>
      </form>
    </div>
  );
}

export default UploadCourse;
