import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('App component contains element div.App', () => {
  const { container } = render(<App />);
  const select = container.querySelector.bind(container);
  const appDiv = select('div.App');
  expect(appDiv).not.toBe(null);
});