import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="mt-5">
                <div className="container">
                    <div className="add_btn mb-2">
                        <NavLink to={'/register'} className="btn btn-primary">Add Data</NavLink>
                    </div>

                    <table className="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">ID</th>
                                <th scope="col">UserName</th>
                                <th scope="col">Email</th>
                                <th scope="col">Job</th>
                                <th scope="col">Number</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Nitin kaplas</td>
                                <td>nititkaplas123</td>
                                <td>25</td>
                                <td>8837700899</td>
                                <td className="d-flex justify-content-between" >
                                    <button className="btn btn-success">View</button>
                                    <button className="btn btn-primary">Update</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">2</th>
                                <td>Nitin kaplas</td>
                                <td>nititkaplas123</td>
                                <td>25</td>
                                <td>8837700899</td>
                                <td className="d-flex justify-content-between" >
                                    <button className="btn btn-success">View</button>
                                    <button className="btn btn-primary">Update</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">3</th>
                                <td>Nitin kaplas</td>
                                <td>nititkaplas123</td>
                                <td>25</td>
                                <td>8837700899</td>
                                <td className="d-flex justify-content-between" >
                                    <button className="btn btn-success">View</button>
                                    <button className="btn btn-primary">Update</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>

    )
}
export default Home