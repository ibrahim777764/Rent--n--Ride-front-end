/* eslint linebreak-style: ["error", "windows"] */
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import AboutScreen from './routes/About';
import AdminScreen from './routes/admin/Admin';
import BookingScreen from './routes/Booking';
import DetailScreen from './routes/Detail';
import EditScreen from './routes/admin/Edit';
import HomeScreen from './routes/Home';
import NewScreen from './routes/admin/New';
import ReservationScreen from './routes/Reservation';
import SignupForm from './components/auth/signup-form';
import LoginForm from './components/auth/login-form';
import TopBar from './components/topbar/topbar';
import ProtectedRoutes from './routes/ProtectedRoutes';

function App() {
  const [userSession, setUserSession] = useState(() => JSON.parse(localStorage.getItem('user')));
  return (
    <Router>
      <Navbar />
      <TopBar userSession={userSession} setUserSession={setUserSession} />
      <Routes>
        <Route element={<LoginForm setUserSession={setUserSession} userSession={userSession} />} path="/login" />
        <Route element={<SignupForm userSession={userSession} />} path="/signup" />

        <Route element={<ProtectedRoutes />}>
          <Route element={<AdminScreen />} path="/admin" />
          <Route element={<NewScreen />} path="/admin/new" />
          <Route element={<EditScreen />} path="/admin/edit/:id" />
          <Route element={<AboutScreen />} path="/about" />
          <Route element={<BookingScreen />} path="/booking" />
          <Route element={<DetailScreen />} path="/models/:id" />
          <Route element={<ReservationScreen />} path="/reservation" />
          <Route element={<HomeScreen />} path="/models" />
          <Route element={<HomeScreen />} index />
        </Route>

        <Route
          element={(
            <section className="flex-center">
              <div className="container text-center">404 Page not found</div>
            </section>
          )}
          path="*"
        />
      </Routes>
    </Router>
  );
}

export default App;
