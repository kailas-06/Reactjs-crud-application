import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EmployeeData = () => {
    const [data, setData] = useState([]);

    const getData = (e) => {
        axios
            .get("https://660e54346ddfa2943b3669dd.mockapi.io/crud-application")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleDelete = (id) => {
        axios
            .delete(
                `https://660e54346ddfa2943b3669dd.mockapi.io/crud-application/${id}`
            )
            .then(() => {
                getData();
            });
    };

    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h2>Employee data table:</h2>
            <div className="btn-data">
                <Link to="/">
                    <button type="submit" className="btn btn-primary">Back</button>
                </Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                {data.map((eachdata, index) => {
                    return (
                        <>
                            <tbody>
                                <tr key={index}>
                                    <td scope="col">{index + 1}</td>
                                    <td scope="row" key="{eachdata}">
                                        {eachdata.id}
                                    </td>
                                    <td>{eachdata.name}</td>
                                    <td>{eachdata.email}</td>
                                    <td>
                                        <Link to="/updateemployee">
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => setToLocalStorage(eachdata.id, eachdata.name, eachdata.email)}>
                                                Edit
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(eachdata.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </>
                    );
                })}
            </table>
        </>
    );
};

export default EmployeeData;
