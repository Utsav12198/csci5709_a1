import React, { useState } from "react";
import './Appointment.css';
import { Link } from 'react-router-dom';


const Appointment = () => {
    window.scrollTo(0, 0);

    const [cards] = useState([
        {
            title: 'Appointment-1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam '
        },
        {
            title: 'Appointment-2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam '
        },
        {
            title: 'Appointment-3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam '
        },
        {
            title: 'Appointment-4',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam '
        },
        {
            title: 'Appointment-5',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam '
        },
        {
            title: 'Appointment-6',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam '
        }

    ])

    return (
        <div>
            <section>
                <div className="container">
                    <h1 style={{ color: "#9A208C" }}>Scheduled Appointments</h1>
                    <h2 style={{ color: "#b22222" }}>Click on appointment to view more details</h2>
                    <div className="cards">
                        {
                            cards.map((card, i) => {
                                return (

                                    <div key={i} className="card">
                                        <h3 style={{ color: "black" }}>{card.title}</h3>
                                        <p style={{ color: "black" }}>{card.text}</p>
                                        <Link to='/appointmentdetails' style={{ color: "white" }}><button className="btn">view details</button></Link>
                                    </div>
                                )
                            })}
                    </div>
                    <div className="btn-align" >
                        <Link to='/' style={{ color: "white", alignContent: "center" }}><button className="btn" style={{ alignItems: "center" }}>back</button></Link>
                    </div>

                </div>
            </section>

        </div>
    )
}


export default Appointment;