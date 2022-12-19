import React from 'react';

class ExperienceSection extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <form className="app-form">
        <span id="titles">Experience</span>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="University Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Title of study"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Title of study"
          />
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

export default ExperienceSection;
