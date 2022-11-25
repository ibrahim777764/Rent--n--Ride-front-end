import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import BackButton from '../components/backbutton/BackButton';
import Navbar from '../components/navbar/Navbar';

it('Test that BackButton renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <BackButton />
        <Navbar />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
