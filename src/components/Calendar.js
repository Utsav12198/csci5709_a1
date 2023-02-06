import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import './Calendarcustom.css';
import './Calendar.css';

function Cal() {
  window.scrollTo(0, 0);

  const [date, setDate] = useState(new Date());



  return (
    <div>
      <header className="App-header">
        <h1 className='heading'><b>Select</b> date to view scheduled appointments</h1>
        <Calendar onChange={setDate}
          defaultValue={date}
          minDate={new Date()}
          minDetail='year'
          value={date}

        />
        <p><button style={{ borderRadius: "10px", margin: "10px;", padding: "5px", backgroundColor: "purple", marginTop: "10px", cursor: "pointer" }} >
          <Link to='/viewappointment' style={{ color: "white" }}>submit</Link>
        </button>
        </p>
      </header>



    </div>
  );
}

export default Cal;

