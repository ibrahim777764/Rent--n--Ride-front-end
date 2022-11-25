import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Form from '../components/form/Form';
import Navbar from '../components/navbar/Navbar';

it('Test Form renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Form />
        <Navbar />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
