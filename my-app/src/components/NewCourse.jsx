import React from "react";
import "./NewCourse.css";
import axios from "axios";

class NewCourse extends React.Component {
  state = {
    course: {
      courseName: "",
      courseType: "",
      description: "",
    },
  };

  changeHandler = (event) => {
    const course = { ...this.state.course };
    course[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ course: course });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state.course);
    axios
      .post("http://localhost:8080/admin/addNewCourse", this.state.course)
      .then((res) => {
        this.props.history.push("/courses");
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <div className="images">
        <div
          className="container w-50 bg-light text-dark mt-4 pt-3 pb-3 shadow-lg rounded"
          id="main"
        >
          <h1 className="color-primary">ADD NEW COURSE</h1>
          <form onSubmit={this.submitHandler} autoComplete="off">
            <div className="container mb-3 col-8 my-3">
              <label for="CN" className="form-label">
                Course Name
              </label>
              <input
                type="text"
                className="form-control"
                id="CN"
                name="courseName"
                value={this.state.course.courseName}
                required
                onChange={this.changeHandler}
              />
            </div>
            <div className="container mb-3 col-8">
              <label for="CT" className="form-label">
                Course Type
              </label>
              <input
                type="text"
                className="form-control"
                id="CT"
                name="courseType"
                value={this.state.course.courseType}
                required
                onChange={this.changeHandler}
              />
            </div>
            <div className="container mb-3 col-8">
              <label for="des" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="des"
                name="description"
                value={this.state.course.description}
                required
                onChange={this.changeHandler}
              />
            </div>
            <div classNameName="my-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewCourse;
