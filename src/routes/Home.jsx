/* eslint-disable react/jsx-props-no-spreading */
/* eslint linebreak-style: ["error", "windows"] */
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.scss';
import CarCard from '../components/carCard/CarCard';
import { fetchVehicles } from '../redux/vehicles/vehicles';
import LoginScreen from './Login';

function Home() {
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicles);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchVehicles());
  }, []);

  const settings = {
    className: 'center',
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  console.log(vehicles);
  return (

    
  );
}

export default Home;
