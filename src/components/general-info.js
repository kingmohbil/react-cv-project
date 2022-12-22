import React from 'react';

class GenInfo extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <div className="card-group">
          <div className="card" id="react-card">
            <div className="card-body">
              <h5 className="card-title">Phone Number</h5>
              <p className="card-text">{this.props.phone}</p>
            </div>
          </div>
          <div className="card" id="react-card">
            <div className="card-body">
              <h5 className="card-title">Email</h5>
              <p className="card-text">{this.props.email}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GenInfo;
