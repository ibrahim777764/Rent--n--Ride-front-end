/* eslint linebreak-style: ["error", "windows"] */
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBookings } from '../redux/booking/booking';

const ReservationScreen = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.bookings);

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('current_user'));
    console.log(id);
    dispatch(fetchBookings(id));
    console.log(id);
  }, []);

  const bgimage = {
    vehicle_photo: 'model1a.jpg',
  };

  console.log(reservations);
  return (
    
  );
};

export default ReservationScreen;
