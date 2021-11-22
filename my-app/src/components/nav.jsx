import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

class Nav extends Component {
  render() {
    return (
      // <nav className="navbar navbar-expand-sm navbar-light bg-light">
      //   <div className="container-fluid">
      //     <NavLink className="navbar-brand" to="/">
      //       Exam Portal
      //     </NavLink>
      //     <button
      //       className="navbar-toggler"
      //       type="button"
      //       data-bs-toggle="collapse"
      //       data-bs-target="#navbarSupportedContent"
      //       aria-controls="navbarSupportedContent"
      //       aria-expanded="false"
      //       aria-label="Toggle navigation"
      //     >
      //       <span className="navbar-toggler-icon"></span>
      //     </button>
      //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      //         <li className="nav-item">
      //           <NavLink
      //             className="nav-link active"
      //             aria-current="page"
      //             to="/home"
      //           >
      //             Home
      //           </NavLink>
      //         </li>
      //         <li className="nav-item">
      //           <NavLink className="nav-link" to="/courses">
      //             Courses
      //           </NavLink>
      //         </li>
      //       </ul>
      //       <form className="d-flex"></form>
      //       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      //         <li className="nav-item">
      //           <NavLink className="nav-link" to="/login">
      //             Login
      //           </NavLink>
      //         </li>
      //         <li className="nav-item">
      //           <NavLink className="nav-link" to="/register">
      //             Register
      //           </NavLink>
      //         </li>
      //         <li className="nav-item">
      //           <NavLink className="nav-link" to="/update">
      //             Update
      //           </NavLink>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>

      <nav className="navbar navbar-expand-lg navbar-color">
        <div className="wrapper"> </div>
        <div className="container-fluid all-show">
          <NavLink className="navbar-brand" to="/">
            Exam Portal<i className="fa fa-codepen"></i>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/courses">
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/update">
                  Update
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-search"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
