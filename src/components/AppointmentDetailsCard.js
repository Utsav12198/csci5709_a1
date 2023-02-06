import React from "react";

import './AppointmentDetails.css';


const AppointmentDetailsCard = (props) => {
    window.scrollTo(0, 0);

    return (
        <>
            <a className="edu-content">
                <h4 style={{ color: "white" }}>pet {props.number} timing</h4>
                <p style={{ color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </a>
        </>
    )
}

export default AppointmentDetailsCard;