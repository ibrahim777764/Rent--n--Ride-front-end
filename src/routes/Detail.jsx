
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BackButton from '../components/backbutton/BackButton';
import Booking from '../components/booking/Booking';
import Button from '../components/button/Button';
// import Gallery from '../components/gallery/Gallery';

const DetailScreen = () => {
  const { id } = useParams();
  const cars = useSelector((state) => state.cars);
  const car = cars.find((element) => element.id === parseInt(id, 10));
  // const gallery = car.image
  const [background, setBackground] = useState(car.id);
  const [bookVisible, setBookVisible] = useState(false);

  const showBooking = () => setBookVisible(!bookVisible);
  const changeBG = (newbg) => setBackground(newbg);

  return (
    <div className="container" style={{ backgroundImage: `url(${background})` }}>
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
