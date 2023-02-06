import React from "react";
import AppointmentDetailsCard from "./AppointmentDetailsCard";
import './AppointmentDetails.css';
import { Link } from 'react-router-dom';

const AppointmentDetails = (props) => {
    window.scrollTo(0, 0);

    return (
        <>
            <h1 className="edu-heading">Appointment  Details</h1>
            <div className="edu-flex-container">

                <AppointmentDetailsCard number="1"></AppointmentDetailsCard>
                <AppointmentDetailsCard number="2"></AppointmentDetailsCard>
                <AppointmentDetailsCard number="3"></AppointmentDetailsCard>
                <AppointmentDetailsCard number="4"></AppointmentDetailsCard>

            </div>
            <div className="btn-center">
                <Link to='/viewappointment' style={{ color: "white", alignContent: "center" }}><button className="btn" style={{ alignItems: "center" }}>back</button></Link>
            </div>

        </>
    )

}

export default AppointmentDetails;
