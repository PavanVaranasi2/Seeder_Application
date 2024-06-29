import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App component', () => {
  test('renders Seeder Application text', () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/Seeder Application/i);
    expect(textElement).toBeInTheDocument();
  });
});
