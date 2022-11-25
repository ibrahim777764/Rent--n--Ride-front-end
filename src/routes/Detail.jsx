/* eslint-disable import/no-named-as-default */
/* eslint linebreak-style: ["error", "windows"] */
import { React, useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import BackButton from '../components/backbutton/BackButton';
import Booking from '../components/booking/Booking';
import Button from '../components/button/Button';
// import Gallery from '../components/gallery/Gallery';
import { fetchVehicle } from '../redux/vehicles/vehicles';

const DetailScreen = () => {
  const  dispatch = useDispatch();
  const  car = useSelector(state=>state.vehicles.car)
  const { id } = useParams();
  const [background, setBackground] = useState(car.id);
  const [bookVisible, setBookVisible] = useState(false);

  const showBooking = () => setBookVisible(!bookVisible);
  const changeBG = (newbg) => setBackground(newbg);

  useEffect(() => {
    dispatch(fetchVehicle(id));
}, []);

return (
  
);
};

export default DetailScreen;
