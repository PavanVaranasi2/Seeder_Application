import React from 'react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import { CssBaseline } from '@mui/material';
import HeaderCard, { HeaderCardProps } from '.';
import theme from '../../../theme';

describe('HeaderCard', () => {
  const renderComponent = (props: HeaderCardProps) =>
    render(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HeaderCard {...props} />
      </ThemeProvider>
    );

  it('displays the greeting message based on the current hour', () => {
    renderComponent({ greeting: true, currentHour: 9 });
    expect(screen.getByText(/Good morning/)).toBeInTheDocument();

    renderComponent({ greeting: true, currentHour: 13 });
    expect(screen.getByText(/Good afternoon/)).toBeInTheDocument();

    renderComponent({ greeting: true, currentHour: 19 });
    expect(screen.getByText(/Good evening/)).toBeInTheDocument();
  });

  it('displays the heading and content when greeting is false', () => {
    renderComponent({
      heading: 'Hello, Pavan!',
      content: 'Welcome to the dashboard.',
      greeting: false,
    });
    expect(screen.getByText('Hello, Pavan!')).toBeInTheDocument();
    expect(screen.getByText('Welcome to the dashboard.')).toBeInTheDocument();
  });

  it('displays the formatted date when greeting is true', () => {
    renderComponent({ greeting: true, currentHour: 15 });
    const formattedDate = new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    });
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });
});
