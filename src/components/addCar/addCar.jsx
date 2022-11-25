import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addCarThunk } from "../../redux/Cars/Cars";
import './addCar.scss';

const AddCar = () => {

  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: '',
    image: '',
    description: '',
    price: '',
    location: '',
    duration: '',
  });

  const handle = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCarThunk(state));
    setState({
      name: '',
      image: '',
      description: '',
      price: '',
      location: '',
      duration: '',
    });
  };

  const {
    register,
    formState: { errors }
  } = useForm();



  // const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null)

  // const onImageChange = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     setImage(URL.createObjectURL(event.target.files[0]));
  //   }
  // }

  return (
    <div className="car-heading">
      <h1 className="car-head">Add New Car</h1>

      <form onSubmit={handleSubmit}>

        <div className="grid-display grid-simple">
          <div className="add-margin-below">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handle}
              value={state.name}
              placeholder="Car Model"
              className="form-field"
              required
            />
          </div>
        </div>

        <div className="grid-display grid-simple">
          <div className="add-margin-below">
            <label htmlFor="image">Image</label><br />
            <input type="file" onChange={handle} value={state.image} className="filetype" />
            <img src={state.image} alt="preview image" className="car-img" />
          </div>
        </div>

        <div className="grid-display grid-simple">
          <div className="add-margin-below">
            <label htmlFor="name">Description</label>
            <textarea
              name="description"
              className="form-field"
              onChange={handle}
              value={state.description}
              required
            />
          </div>
        </div>

        <div className="grid-display grid-triple">
          <div className="add-margin-below">
            <label htmlFor="brand">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              onChange={handle}
              value={state.price}
              placeholder="price in $"
              className="form-field"
              required
            />
          </div>

          <div className="add-margin-below">
            <label htmlFor="location">Location</label>
            <select
              name="location"
              className="form-field"
              onChange={handle}
              value={state.location}
              required
            >
              <option value="location">Select location</option>
              <option value="London">London</option>
              <option value="Newcastle">Newcastle</option>
              <option value="Manchester">Manchester</option>
              <option value="Istanbul">Istanbul</option>
              <option value="Leeds">Leeds</option>
              <option value="West London">West London</option>
              <option value="New York">New York</option>
              <option value="Amsterdam">Amsterdam</option>
              <option value="New Jersey">New Jersey</option>
              <option value="San Fransisco">San Fransisco</option>
            </select>
          </div>

          <div className="add-margin-below">
            <label htmlFor="duration">Duration (in months)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              onChange={handle}
              value={state.duration}
              placeholder="Max duration to rent"
              className="form-field"
              required
            />
          </div>
        </div>
        <div className="submit-btn">
          <button type="submit" className="button">Create a Car</button>
        </div>
      </form>
    </div>
  );
}

export default AddCar
