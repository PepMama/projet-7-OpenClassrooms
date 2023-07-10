import { render, screen } from '@testing-library/react';
import errorPage from './components/App';

test('renders learn react link', () => {
  render(<errorPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
