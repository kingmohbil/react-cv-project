import React from 'react';

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }
  render() {
    return (
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Name</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
