import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './Components/Navbar'
import AddCar from './Pages/AddCar'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes >
          <Route path='/models' />
          <Route path='/reserve' />
          <Route path='/my_reservations' />
          <Route path='/add_car' element={<AddCar />} />
          <Route path='/delete_car' />
        </Routes >
      </Router>
    </>
  );
}

export default App;
