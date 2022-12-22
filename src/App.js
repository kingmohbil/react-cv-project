import React from 'react';
import GeneralSection from './components/genSection';
import ExperienceSection from './components/expSection';
import PracticalExperience from './components/practicalExperience';
import GenInfo from './components/general-info';
import EduSection from './components/cv-edu';
import PracticalExp from './components/practical-experience-info';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      lName: '',
      universityName: '',
      dateofStudy: '',
      companyName: '',
      positionTitle: '',
    };
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUniversityNameChange =
      this.handleUniversityNameChange.bind(this);
    this.handleDateosStudyChange = this.handleDateosStudyChange.bind(this);
    this.handlePostiotionTitleChange =
      this.handlePostiotionTitleChange.bind(this);
    this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
    this.handleChangeFrom = this.handleChangeFrom.bind(this);
    this.handleChangeTo = this.handleChangeTo.bind(this);
  }
  handleChangeFirstName = (e) => {
    this.setState({
      fName: e.target.value,
    });
  };
  handleChangeLastName = (e) => {
    this.setState({
      lName: e.target.value,
    });
  };
  handleChangePhoneNumber = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleUniversityNameChange = (e) => {
    this.setState({
      universityName: e.target.value,
    });
  };
  handleDateosStudyChange = (e) => {
    this.setState({
      dateofStudy: e.target.value,
    });
  };
  handleCompanyNameChange = (e) => {
    this.setState({
      companyName: e.target.value,
    });
  };
  handlePostiotionTitleChange = (e) => {
    this.setState({
      positionTitle: e.target.value,
    });
  };
  handleChangeFrom = (e) => {
    this.setState({
      from: e.target.value,
    });
  };
  handleChangeTo = (e) => {
    this.setState({
      to: e.target.value,
    });
  };
  render() {
    return (
      <div className="App">
        <div className="form-side">
          <GeneralSection
            onChangeFirstName={this.handleChangeFirstName}
            onChangeLastName={this.handleChangeLastName}
            onNumberChange={this.handleChangePhoneNumber}
            onEmailChange={this.handleEmailChange}
          />
          <ExperienceSection
            onUniversityChange={this.handleUniversityNameChange}
            onDateofStudyChange={this.handleDateosStudyChange}
          />
          <PracticalExperience
            onCompanyChange={this.handleCompanyNameChange}
            onPositionChange={this.handlePostiotionTitleChange}
            onFromChange={this.handleChangeFrom}
            onToChange={this.handleChangeTo}
          />
        </div>
        <div className="cv-side">
          <div className="name-box">
            {this.state.fName + ' ' + this.state.lName}
          </div>
          <GenInfo phone={this.state.phone} email={this.state.email} />
          <EduSection
            firstTitle="University Name: "
            firstText={this.state.universityName}
            secondTitle="Date of Study: "
            secondText={this.state.dateofStudy}
          />
          <EduSection
            firstTitle="Company Name: "
            firstText={this.state.companyName}
            secondTitle="Position title: "
            secondText={this.state.positionTitle}
          />
          <PracticalExp from={this.state.from} to={this.state.to} />
        </div>
      </div>
    );
  }
}
export default App;
