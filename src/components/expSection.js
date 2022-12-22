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
            onChange={this.props.onUniversityChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Date of study"
            onChange={this.props.onDateofStudyChange}
          />
        </div>
        <button type="button" className="btn btn-dark">
          Add
        </button>
      </form>
    );
  }
}

export default ExperienceSection;
