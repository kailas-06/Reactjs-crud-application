import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import EmployeeData from "./components/EmployeeData";
import EmployeeForm from "./components/EmployeeForm";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (

    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<EmployeeForm />} />
          <Route exact path="/employeedata" element={<EmployeeData />} />
          <Route exact path="/updateemployee" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
