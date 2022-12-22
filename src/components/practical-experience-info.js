import React from 'react';

class PracticalExp extends React.Component {
  render() {
    return (
      <div>
        <div className="card-group">
          <div className="card" id="react-card">
            <div className="card-body">
              <h5 className="card-title">From</h5>
              <p className="card-text">{'' || this.props.from}</p>
            </div>
          </div>
          <div className="card" id="react-card">
            <div className="card-body">
              <h5 className="card-title">To</h5>
              <p className="card-text">{'' || this.props.to}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PracticalExp;
