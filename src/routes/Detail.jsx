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
  <div className="container">
     <div className="container" style={{ backgroundImage: `url(${car.image})` }}></div>
    <div className="whiteCortain">

      {/* <Gallery data={gallery} btnAxn={changeBG} /> */}

      <div className="detailBox">
        <h1>{car.name}</h1>
        <p>
          {car.description}
        </p>

        <table className="detail-table">
          <tbody>
            <tr>
              <td>Price</td>
              <td className="text-end">{car.price}</td>
            </tr>
            <tr>
              <td>Rented?</td>
              <td className="text-end">{car.rented ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td>Duration (months)</td>
              <td className="text-end">{car.duration}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td className="text-end">{car.location}</td>
            </tr>
          </tbody>
        </table>

        <Button
          btnAxn={showBooking}
          iconStart="calendar"
          iconEnd="arrow"
          label="Booking"
          size="main"
        />
      </div>
    </div>

    <BackButton />
    <Booking
      vehicle={car.id}
      price={car.price}
      state={bookVisible}
      btnAxn={showBooking}
    />
  </div>
);
};

export default DetailScreen;
