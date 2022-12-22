import React from 'react';

class GeneralSection extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <form className="app-form">
        <span id="titles">Personal inforamtion</span>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
              onChange={this.props.onChangeFirstName}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
              onChange={this.props.onChangeLastName}
            />
          </div>
        </div>
        <div className="mb-3">
          <input
            type="tel"
            className="form-control"
            placeholder="Phone Number"
            onChange={this.props.onNumberChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            onChange={this.props.onEmailChange}
          />
        </div>
        <button type="button" className="btn btn-dark">
          Add
        </button>
      </form>
    );
  }
}

export default GeneralSection;
