import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from '../components/button/Button';
import Navbar from '../components/navbar/Navbar';

it('Test that button renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Button />
        <Navbar />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
