import React from 'react';

import useForm from '../utils/useForm';

function CreateSessionPage(props) {
  const form = useForm({ start: '', end: '' }, () => {
    const session = [values.start, values.end].join('-');
    window.createSession(session);
    clear();
    return props.history.push('/sessions');
  });
  const { values, handleSubmit, handleChange, clear } = form;
  const disabled = !values.start || !values.end;
  return (
    <div className="create-session">
      <form action="" onSubmit={handleSubmit}>
        <h2>Add New Session</h2>
        <div className="form-group">
          <label htmlFor="">Session Start</label>
          <input
            type="number"
            className="form-control"
            name="start"
            value={values.start}
            placeholder="2017"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Session End</label>
          <input
            type="number"
            className="form-control"
            placeholder="2018"
            name="end"
            value={values.end}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-positive" disabled={disabled}>
          Create Session
        </button>
      </form>
    </div>
  );
}

export default CreateSessionPage;
