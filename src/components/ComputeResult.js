import React, { useState } from 'react';

function ComputeResult() {
  return (
    <div className="compute-result">
      <form action="">
        <h3>Enter Student's Information</h3>
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="">Registration Number</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="">Mode of Entry</label>
          <select name="" id="" className="form-control">
            <option value="">UTME</option>
            <option value="">DIRECT ENTRY</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">State of Origin</label>
          <input type="text" className="form-control" />
        </div>

        <button type="submit" className="btn btn-positive mx-2">
          Compute Result
        </button>
      </form>
    </div>
  );
}

export default ComputeResult;
