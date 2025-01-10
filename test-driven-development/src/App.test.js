import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Enter numbers label', () => {
  render(<App />);
  // The text should match exactly with the label in the App
  const linkElement = screen.getByText(/Enter numbers \(comma or newline separated\):/i);
  expect(linkElement).toBeInTheDocument();
});
