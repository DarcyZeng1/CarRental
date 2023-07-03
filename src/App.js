import './App.css';
import Home from './Home';
import ListOfCars from './ListOfCars';
import Booking from './Booking';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/listOfCars" element={<ListOfCars />} />
            <Route path="/Booking" element={<Booking />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}


export default App;
