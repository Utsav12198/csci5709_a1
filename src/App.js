import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appointment from './components/Appointment';
import AppointmentDetails from './components/AppointmentDetails';
import Cal from './components/Calendar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route exact path="/" element={<Cal />}></Route>
          <Route path="/viewappointment" element={<Appointment />}></Route>
          <Route exact path="/appointmentdetails" element={<AppointmentDetails />}></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
