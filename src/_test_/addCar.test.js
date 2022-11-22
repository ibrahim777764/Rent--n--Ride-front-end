import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import AddCar from '../components/addCar/addCar';
import Navbar from '../components/navbar/Navbar';

it('Test that AddCar renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <AddCar />
        <Navbar />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
