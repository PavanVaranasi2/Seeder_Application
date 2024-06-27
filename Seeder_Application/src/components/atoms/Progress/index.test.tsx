import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CustomCircularProgress from '.';
import '@testing-library/jest-dom';

// Create a custom theme to wrap your component in
const theme = createTheme({
  palette: {
    background: {
      default: '#fff',
    },
    primary: {
      main: '#A0D7E7',
    },
  },
});

const renderComponent = (value: number, size: number, strokeWidth: number) =>
  render(
    <ThemeProvider theme={theme}>
      <CustomCircularProgress
        value={value}
        size={size}
        strokeWidth={strokeWidth}
      />
    </ThemeProvider>
  );

describe('CustomCircularProgress', () => {
  test('renders with initial value and checks text content', () => {
    renderComponent(50, 100, 4);
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  test('component style changes based on size prop', () => {
    const { container } = renderComponent(50, 150, 5);
    expect(container.firstChild).toHaveStyle('width: 150px');
    expect(container.firstChild).toHaveStyle('height: 150px');
  });

  // Additional tests to ensure full coverage
  // Consider testing edge cases like minimum and maximum values
  // Also test this one later - expect(progressCircle).toHaveStyle('transform: rotate(-90deg)');
});
