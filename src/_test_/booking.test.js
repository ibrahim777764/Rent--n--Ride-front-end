import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Booking from '../components/booking/Booking';
import Navbar from '../components/navbar/Navbar';

it('Test that Booking renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Booking />
        <Navbar />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
