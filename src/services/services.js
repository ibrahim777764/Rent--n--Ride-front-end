import http from './http';
import userHttp from './userhttp';

const getAllCars = () => http.get('/api/v1/cars');
const getCar = (id) => http.get(`/api/v1/cars/${id}`);
const createCar = (data) => http.post('/api/v1/cars', data);
const updateCar = (id, data) => http.put(`/api/v1/cars/${id}`, data);
const removeCar = (id) => http.delete(`/api/v1/cars/${id}`);

const login = (data) => userHttp.post('/api/v1/login', data);
const signup = (data) => userHttp.post('/api/v1/signup', data);

const createBooking = (data) => http.post('/api/v1/bookings', data);
const getBookings = (id) => http.get(`/api/v1/bookings/${id}`);
const removeBooking = (id) => http.delete(`/api/v1/bookings/${id}`);

const carService = {
  getAllCars,
  getCar,
  createCar,
  updateCar,
  removeCar,
};

const userService = {
  login,
  signup,
};

const bookingService = {
  createBooking,
  getBookings,
  removeBooking,
};

export default carService;
export { userService, bookingService };
