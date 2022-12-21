import React from 'react';
import PersonalInfo from './components/personal-info-side';

class OutputSide extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="output-side">
        <div className="black-box"></div>
        <PersonalInfo />
      </div>
    );
  }
}

export default OutputSide;
