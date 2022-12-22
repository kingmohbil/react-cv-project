import React from 'react';

class EduSection extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <div className="card" id="react-card">
          <div className="card-body">
            <h5 className="card-title">
              {this.props.firstTitle + ' ' + this.props.firstText}
            </h5>
          </div>
        </div>
        <div className="card" id="react-card">
          <div className="card-body">
            <h5 className="card-title">
              {this.props.secondTitle + ' ' + this.props.secondText}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default EduSection;
