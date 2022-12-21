import React from 'react';
import GeneralSection from './components/genSection';
import ExperienceSection from './components/expSection';
import PracticalExperience from './components/practicalExperience';

class FormSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gen: {
        text: '',
      },
    };
    this.handleChangeName = this.handleChangeName.bind(this);
  }
  handleChangeName = (e) => {
    this.setState({
      gen: {
        text: e.target.value,
      },
    });
  };
  render() {
    return (
      <div className="form-side">
        <GeneralSection onchange={this.handleChangeName} />
        <ExperienceSection />
        <PracticalExperience />
      </div>
    );
  }
}
export default FormSide;
