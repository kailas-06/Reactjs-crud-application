import axios from "axios";
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";


const UpdateEmployee = () => {

  const [id,setId] = useState(0)
  const [name,setName] = useState()
  const [email, setEmail] = useState()

  useEffect(() => {
    setId(localStorage.getItem("id"))
    setName(localStorage.getItem("name"))
    setEmail(localStorage.getItem("email"))
  }, [])

  const navigate = useNavigate();
  const handelUpdate = (e) => {
    e.preventDefault()
    axios.put(`https://660e54346ddfa2943b3669dd.mockapi.io/crud-application/${id}`, {
      name: name,
      email: email,
    })
    .then(() => {
     navigate("/employeedata")
    })
  }
  return (
    <>
      <h2 className="mb-5">Update Employee Form</h2>
      <div className="container">
        <form className="crud-app">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control"
              id="name" value={name}
            onChange={(e) => { setName(e.target.value) }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailinput" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              id="emailinput"
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </div>
          <div className="mt-5">
          <Link to ="/employeedata">
          <button type="submit"
            className="btn btn-primary"
            onClick={handelUpdate}
          >
            Update
          </button>
          </Link>
          <Link to ="/employeedata">
          <button type="submit"
            className="btn btn-primary ms-4"
          >
            Back
          </button>
          </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default UpdateEmployee
