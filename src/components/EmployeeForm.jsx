import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const EmployeeForm = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const employeeHistory = useNavigate()

  const header = {"Access-Control-Allow-origin" : "*"}

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
    axios.post("https://660e54346ddfa2943b3669dd.mockapi.io/crud-application", {
      name: name,
      email: email,
      header
    }).then(() => {
      employeeHistory('/employeeData')
    })


  }
  return (
    <>
      <h2>Employee Form</h2>
      <div className="btn-data">
        <Link to="/employeedata">
        <button type="submit" className="btn btn-primary">Show data</button></Link>
      </div>
      <div className="container">
        <form className="crud-app">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" onChange={(e) => {setName(e.target.value)}} />
          </div>
          <div className="mb-3">
            <label htmlFor="emailinput" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailinput"
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handelSubmit}>
            Submit
          </button>

        </form>
      </div>
    </>
  );
};
export default EmployeeForm;
