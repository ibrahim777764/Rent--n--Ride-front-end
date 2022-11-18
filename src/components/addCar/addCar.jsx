import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './addCar.scss';

const AddCar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [selectedFile, setSelectedFile] = useState(null);

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
          <input
          type="file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
          />
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

      {/* <div className="grid-display grid-double">
        <div className="add-margin-below grid-double">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Italia"
            className="form-field"
            required
          />
        </div>
      </div> */}

      {/* <h3>Technical Specs</h3>

      <div className="grid-display grid-triple">
        <div className="add-margin-below">
          <label htmlFor="power">Power</label>
          <input
            type="text"
            id="power"
            name="power"
            placeholder="780 CV (574 kW)"
            className="form-field"
            required
          />
        </div>

        <div className="add-margin-below">
          <label htmlFor="max_speed">Max Speed</label>
          <input
            type="text"
            id="max_speed"
            name="max_speed"
            placeholder="355 km/h"
            className="form-field"
            required
          />
        </div>

        <div className="add-margin-below">
          <label htmlFor="acceleration">Acceleration</label>
          <input
            type="text"
            id="acceleration"
            name="acceleration"
            placeholder="9.8s"
            className="form-field"
            required
          />
        </div>
      </div> */}


        {/* <div className="form-control">
          <label>Name</label>
          <input type="text" name="email" {...register("email")} />
        </div>
        <div className="form-control">
          <label>Password:</label>
          <input type="password" name="password" {...register("password")} />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div> */}
      </form>
    </div>
  );
}

export default AddCar
