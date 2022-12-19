import React from 'react';

class PracticalExperience extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <form className="app-form">
        <span id="titles">Practical Experience</span>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Company Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Position title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="from">From</label>
          <input type="date" className="form-control" id="from" />
        </div>
        <div className="mb-3">
          <label htmlFor="to">To</label>
          <input type="date" className="form-control" id="to" />
        </div>
        <button type="button" className="btn btn-primary">
          Edit
        </button>
        <button type="button" className="btn btn-dark">
          Add
        </button>
      </form>
    );
  }
}

export default PracticalExperience;
