import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EmailIcon from '@mui/icons-material/Email';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import DescriptionIcon from '@mui/icons-material/Description';
import Image from "../Image/Photo.jpg"
const Detail = () => {
    
    return (
        <div className="container mt-3">
            <h1>Hello Nitin Kaplas Welcome!!</h1>
            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className="add_btn mx-4">
                      <button className="btn btn-primary">Update</button>
                      <button className="btn btn-danger">Delete</button>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src={Image} style={{ width: 50 }} alt="profile" />
                            <h3 className="mt-3">Name: <span >Nitin Kaplas</span></h3>
                            <h3 className="mt-3">Age: <span >26</span></h3>
                            <p className="mt-3"><EmailIcon />Email: <span>nitinkaplas9643@gmail.com</span></p>
                            <p className="mt-3"><AddHomeWorkIcon />Occuption: <span>Engineer</span></p>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12">

                            <p className="mt-5"><SendToMobileIcon />mobile: <span>8837700899</span></p>
                            <p className="mt-3">< AddLocationIcon/>location: <span>Noida</span></p>
                            <p className="mt-3"><DescriptionIcon /><span>All is well!!</span></p>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}
export default Detail