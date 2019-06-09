import React, { useState } from 'react';
import useForm from '../utils/useForm';

function ComputeResult(props) {
  const session = props.params.sessionId;
  const form = useForm(
    { name: '', regNo: '', mode_of_entry: 'UTME', state: '' },
    () => {
      window.addStudentToSession(session, values);
      return props.history.push(`${props.match.url}/${values.regNo}/compute`);
    }
  );

  const { values, handleChange, handleSubmit, clear } = form;

  const disabled =
    !values.name || !values.regNo || !values.mode_of_entry || !values.state;
  return (
    <div className="compute-result">
      <form onSubmit={handleSubmit} action="">
        <h3>Enter Student's Information</h3>
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Registration Number</label>
          <input
            type="text"
            className="form-control"
            name="regNo"
            value={values.regNo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Mode of Entry</label>
          <select
            name="mode_of_entry"
            id=""
            className="form-control"
            value={values.mode_of_entry}
            onChange={handleChange}
          >
            <option value="UTME">UTME</option>
            <option value="DIRECT ENTRY">DIRECT ENTRY</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">State of Origin</label>
          <input
            type="text"
            className="form-control"
            name="state"
            value={values.state}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          disabled={disabled}
          className="btn btn-positive mx-2"
        >
          Compute Result
        </button>
      </form>
    </div>
  );
}

export default ComputeResult;
