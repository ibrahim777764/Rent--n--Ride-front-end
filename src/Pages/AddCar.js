import React, { useState } from 'react'

function AddCar() {
  const [inputs, setInputs] = useState({});

  const [textarea, setTextarea] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleTextareaChange = (event) => {
    setTextarea(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <section className='add-car'>
      <form onSubmit={handleSubmit}>
        <label>Car name:
          <input
            type="text"
            name="car_name"
            value={inputs.car_name || ""}
            onChange={handleChange}
          />
        </label>
        <label>Rent price:
          <input
            type="number"
            name="price"
            value={inputs.price || ""}
            onChange={handleChange}
          />
        </label>
        <label>Total Price:
          <input
            type="number"
            name="total"
            value={inputs.total || ""}
            onChange={handleChange}
          />
        </label>
        <label>Location:
          <input
            type="text"
            name="location"
            value={inputs.location || ""}
            onChange={handleChange}
          />
        </label>
        <label>Duration "in months":
          <input
            type="number"
            name="duration"
            value={inputs.duration || ""}
            onChange={handleChange}
          />
        </label>
        <label> Car description:
          <textarea value={textarea} onChange={handleTextareaChange} />
        </label>
        <input type="submit" />
      </form>
    </section>
  )
}

export default AddCar
