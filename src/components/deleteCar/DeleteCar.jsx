import React from 'react';
import { useSelector } from 'react-redux';
import './DeleteCar.scss';

const DeleteCar = () => {
  const cars = useSelector((state) => state.cars);

  if (cars === 0) {
    return (
      <div className="no-cars-container">
        <div className="no-cars">
          <span>Loading....</span>
        </div>
      </div>
    );
  }
  return (
    <div className="delete-car-container">
      <h2 className="delete-head">Delete Car</h2>
      <hr id="add-room-hr" />
      <p className="delete-para">
        Would you like to delete your car from our website?
        {" "}
        <br />
        You can do it with one click!
      </p>
    </div>
  );
};

export default DeleteCar;
