import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './addCar.scss';

const AddCar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null)

  const onImageChange = (event) => {
   if (event.target.files && event.target.files[0]) {
     setImage(URL.createObjectURL(event.target.files[0]));
   }
  }

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="car-head">
      <h1>Add New Car</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

      <div className="grid-display grid-simple">
        <div className="add-margin-below">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ferrari"
            className="form-field"
            required
          />
        </div>
      </div>

      <div className="grid-display grid-simple">
        <div className="add-margin-below">
          <label htmlFor="image">Image</label><br/>
          <input type="file" onChange={onImageChange} className="filetype" />
          <img src={image} alt="preview image" />
        </div>
      </div>

      <div className="grid-display grid-simple">
        <div className="add-margin-below">
          <label htmlFor="name">Description</label>
          <textarea
          name="description"
          className="form-field"
          required
          />
        </div>
      </div>

      <div className="grid-display grid-triple">
        <div className="add-margin-below">
          <label htmlFor="brand">Price</label>
          <input
            type="text"
            id="price"
            name="price"
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
            required
          >
            <option value="location">Select location</option>
            <option value="lon">London</option>
            <option value="new">Newcastle</option>
            <option value="man">Manchester</option>
            <option value="ist">Istanbul</option>
            <option value="leed">Leeds</option>
            <option value="west">West London</option>
            <option value="nyk">New York</option>
            <option value="Amst">Amsterdam</option>
            <option value="njy">New Jersey</option>
            <option value="san">San Fransisco</option>
          </select>
        </div>

        <div className="add-margin-below">
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            id="duration"
            name="duration"
            placeholder="9.8s"
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
