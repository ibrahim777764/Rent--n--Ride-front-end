import React from 'react';
import './addCar.scss';

class AddCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render () {
  return (
    <div className='car-head'>
      <h1>I Love Lamborghini</h1>

      <form>
        <label>Name: </label> <br />
        <input type='text' name='name' /> <br />
      </form>
    </div>
  )
 }
}

export default AddCar

