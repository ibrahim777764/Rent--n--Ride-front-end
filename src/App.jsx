import { React, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import AboutScreen from './routes/About';
import BookingScreen from './routes/Booking';
import DetailScreen from './routes/Detail';
import HomeScreen from './routes/Home';
import ReservationScreen from './routes/Reservation';
import SignupForm from './components/auth/signup-form';
import LoginForm from './components/auth/login-form';
import ProtectedRoutes from './routes/ProtectedRoutes';
import { getUser } from './redux/auth/getUserAction';
import { useSelector, useDispatch } from "react-redux";
import { loadCarsThunk } from './redux/Cars/Cars'
import AddCar from './components/addCar/addCar';
import DeleteCar from './components/deleteCar/DeleteCar';

function App() {
  const user = useSelector((state) => {
    return state.userReducer;
  });

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const token = localStorage.getItem("token")
  //   if (token) {
  //     dispatch(getUser(token))
  //   }
  // }, []);

  useEffect(() => {
    dispatch(loadCarsThunk());
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>

        {/* <Route element={<LoginForm />} path="/login" />
        <Route element={<SignupForm />} path="/signup" /> */}

        {/* <Route element={<ProtectedRoutes />}> */}
        <Route element={<AboutScreen />} path="/about" />
        <Route element={<BookingScreen />} path="/booking" />
        <Route element={<DetailScreen />} path="/models/:id" />
        <Route element={<ReservationScreen />} path="/reservation" />
        <Route element={<HomeScreen />} path="/models" />
        <Route element={<HomeScreen />} index />
        <Route path="/addCar" element={<AddCar />} />
        <Route path="/deleteCar" element={<DeleteCar />} />
        {/* </Route> */}

        <Route
          element={(
            <section className="flex-center">
              <div className="container text-center">404 Page not found</div>
            </section>
          )}
          path="*"
        />
      </Routes >
    </Router >
  );
}

export default App;
