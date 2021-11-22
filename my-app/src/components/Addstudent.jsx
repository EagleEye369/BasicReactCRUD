import React from "react";
import axios from "axios";
import "./NewStudent.css";

class Addstudent extends React.Component {
  state = {
    student: {
      email: "",
      firstName: "",
      gender: "",
      lastName: "",
      mobileNo: "",
      password: "",
      username: "",
    },
  };

  changeHandler = (event) => {
    const student = { ...this.state.student };
    student[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ student: student });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state.student);
    axios
      .post("http://localhost:8080/student/newRegister", this.state.student)
      .then((res) => {
        this.props.history.push("/");
        //window.alert("You are Registration is Successfull!");
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <main className="bgimg">
        <div className="wrapp rounded bg-white">
          <div className="h3">Student Registration</div>
          <form onSubmit={this.submitHandler}>
            <div className="form">
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="mandatory">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={this.state.student.firstName}
                    required
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="mandatory">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={this.state.student.lastName}
                    required
                    onChange={this.changeHandler}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="mandatorygender text-md-start">
                    Gender
                  </label>
                  <div className="d-flex mt-2">
                    <label className="option">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={this.changeHandler}
                      />
                      Male
                      <span className="checkmark"></span>
                    </label>
                    <label className="option ms-4">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={this.changeHandler}
                      />
                      Female <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="mandatory">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="mobileNo"
                    value={this.state.student.mobileNo}
                    required
                    onChange={this.changeHandler}
                  />
                </div>
              </div>
              <div className="row">
                <div className="d-flex flex-column col-md-6 mt-md-0 mt-3">
                  <label for="email" className="mandatory text-md-start">
                    User Name
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    name="username"
                    value={this.state.student.username}
                    required
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="d-flex flex-column col-md-6 mt-md-0 mt-3">
                  <label for="email" className="mandatory text-md-start">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    value={this.state.student.email}
                    required
                    onChange={this.changeHandler}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="mandatory">Password </label>
                  <input
                    type="password"
                    required
                    className="form-control"
                    name="password"
                    value={this.state.student.password}
                    required
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="mandatory">Confirm Password </label>
                  <input type="password" required className="form-control" />
                </div>
              </div>
              <button className="btn btn-primary mt-3">Submit</button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default Addstudent;
