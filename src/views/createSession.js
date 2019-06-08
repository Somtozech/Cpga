import React from 'react';

function CreateSessionPage(props) {
  return (
    <div className="create-session">
      <form action="">
        <h2>Add New Session</h2>
        <div className="form-group">
          <label htmlFor="">Session Start</label>
          <input type="text" className="form-control" placeholder="2017" />
        </div>
        <div className="form-group">
          <label htmlFor="">Session End</label>
          <input type="text" className="form-control" placeholder="2018" />
        </div>
        <button type="submit" className="btn btn-positive">
          Create Session
        </button>
      </form>
    </div>
  );
}

export default CreateSessionPage;
