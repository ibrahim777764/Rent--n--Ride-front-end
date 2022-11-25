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
    <div className="container page-reservation">
      <div className="info-container">
        {
          reservations.bookings.map((item) => (
            <article key={item.car.id}>
              <div className="main-info">
                <div
                  className="photo"
                  style={{ backgroundImage: `url(/assets/vehicles/${bgimage.vehicle_photo})` }}
                />
                <span>
                  <p>{item.car.description}</p>
                  <h2>
                    <Link to={`/detail/${item.car.id}`}>
                      {item.car.name}
                    </Link>
                  </h2>
                </span>
              </div>
              <div className="dateRange">
                <div>
                  <span>Start</span>
                  <p>{item.start_date}</p>
                </div>
                <div>
                  <span>End</span>
                  <p>{item.end_date}</p>
                </div>
              </div>
            </article>
          ))
        }
      </div>
    </div>
  );
};

export default ReservationScreen;
