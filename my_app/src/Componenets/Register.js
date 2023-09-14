import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Register = () => {
    
    const [inpData,setInpData]=useState({
        name:"",
        age:"",
        work:"",
        email:"",
        mobile:"",
        address:"",
        description:""
    })

    const setData=(e)=>{
        setInpData((preval)=>{
            return {
                ...preval,
                [e.target.name]:e.target.value
            }
        })
    }

    return (
        <>
            <div className="container">
                <NavLink to={'/'}>Home</NavLink>

                <form>
                    <div className="row">
                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="name" name="name" onChange={setData} value={inpData.name}   class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3 col-lg-6 col-md-6 col-12 ">
                            <label for="exampleInputPassword1" class="form-label">Age</label>
                            <input type="age" name="age" onChange={setData}  value={inpData.age} class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="mb-3 col-lg-6 col-md-6 col-12 ">
                            <label for="exampleInputPassword1" class="form-label">Work</label>
                            <input type="name" name="work"  onChange={setData} value={inpData.work} class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" class="form-label">Email</label>
                            <input type="email" name="email" onChange={setData} value={inpData.email} class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" class="form-label">Mobile</label>
                            <input type="number" name="mobile" onChange={setData} value={inpData.mobile} class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" class="form-label">Address</label>
                            <input type="address" name="address" onChange={setData} value={inpData.address} class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="mb-3 col-lg-12 col-md-12 col-12">
                            <label for="exampleInputPassword1" class="form-label">Description</label>
                            <textarea name="description" onChange={setData} value={inpData.description} className="form-control" id="" cols={30} rows={10}></textarea>
                        </div>


                        <button type="submit"  class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Register


