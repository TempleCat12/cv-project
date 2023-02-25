import React from "react";
import uniquid from "uniquid";

function EducationalForm(props) {
  const { education } = props;
  const { updateEducations } = props;

  const onChangeInput = (key, e) => {
    updateEducations(education.id, key, e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addToEducations();
    this.props.resetEducation();
    console.log(this.state);
  };
  return (
    <form onSubmit={onSubmitForm}>
      <div>
        <label>School: </label>
        <input
          id="schoolName"
          type="text"
          name="schoolName"
          value={education.schoolName}
          onChange={(e) => {
            onChangeInput("schoolName", e);
          }}
          required
          placeholder="school name"
        ></input>
      </div>
      <div>
        <label>Major: </label>
        <input
          id="major"
          type="text"
          name="major"
          value={education.major}
          onChange={(e) => {
            onChangeInput("major", e);
          }}
          required
          placeholder="your major"
        ></input>
      </div>
      <div>
        <label>Degree: </label>
        <input
          id="degree"
          type="text"
          name="degree"
          value={education.degree}
          onChange={(e) => {
            onChangeInput("degree", e);
          }}
          required
          placeholder="degree"
        ></input>
      </div>
      <div>
        <label>Date: </label>
        <input
          id="date"
          type="text"
          name="date"
          value={education.date}
          onChange={(e) => {
            onChangeInput("date", e);
          }}
          // pattern='[0,9]{4}-[0,1]{1}[0,9]{1}-[0,3]{1}[0,9]{1}'
          required
          placeholder="2015-2019"
        ></input>
      </div>
      <button type="submit">submit</button>
    </form>
  );

  // const education = props.education
}
class Educational extends React.Component {
  constructor() {
    super();
    this.state = {
      // education: {
      //   id: uniquid(),
      //   schoolName: "",
      //   major: "",
      //   date: "",
      //   degree: "",
      // },
      educations: [
        {
          id: uniquid(),
          schoolName: "",
          major: "",
          date: "",
          degree: "",
        },
      ],
    };
    this.updateEducations = this.updateEducations.bind(this);
  }
  updateEducations(id, key, value) {
    console.log("update");
    let length = this.state.educations.length;
    for (let i = 0; i < length; i++) {
      if (this.state.educations[i].id === id) {
        // 1. Make a shallow copy of the educations
        let educations = [...this.state.educations];
        // 2. Make a shallow copy of the education we want to mutate
        let education = { ...educations[i] };
        // 3. Replace the property we're interested in
        education[key] = value;
        // 4. Put it back into our array. N.B. we *are* mutating the array here,
        //    but that's why we made a copy first
        educations[i] = education;
        // 5. Set the state to our new copy
        this.setState({ educations });
      }
    }
  }
  resetEducation() {
    this.setState({
      education: {
        schoolName: "",
        major: "",
        date: "",
        degree: "",
      },
    });
  }
  addToEducations(education) {
    this.setState({
      educations: this.state.educations.concat(education),
    });
  }

  render() {
    return (
      <div>
        <h3>Educational Experience</h3>
        <EducationalForm
          education={this.state.educations[0]}
          updateEducations={this.updateEducations}
        />
        <button type="button">Add</button>
      </div>
    );
  }
}
export default Educational;
