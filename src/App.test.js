import { render, screen } from '@testing-library/react';
import {shallow} from 'enzyme';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Team D App');
  expect(linkElement).toBeInTheDocument();
});

it('Should render component App', () => {
  shallow(<App />);
})
