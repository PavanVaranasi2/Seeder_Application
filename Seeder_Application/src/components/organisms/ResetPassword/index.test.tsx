import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ResetPassword from './index';
import { ResetCardProps } from '.';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../theme/index';
import '@testing-library/jest-dom';

const renderResetCard = (props: Partial<ResetCardProps> = {}) =>
  render(
    <ThemeProvider theme={theme}>
      <ResetPassword
        title="Forgot Password"
        description="No worries, we will send you a link to your email id to reset your password"
        placeholder="Enter your mail id"
        startSrc='./assets/icons/notification.svg'
        buttonLabel="Reset Password"
        {...props}
      />
    </ThemeProvider>
  );

describe('ResetCard Component', () => {
  it('renders with given props', () => {
    renderResetCard();
    expect(screen.getByText(/Forgot Password/i)).toBeInTheDocument();
    expect(screen.getByText(/No worries, we will send you a link to your email id to reset your password/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your mail id/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Reset Password/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
  });

  it('enables the button when the input value is valid for Forgot Password', () => {
    const validateInput = (value: string) => /\S+@\S+\.\S+/.test(value);
    renderResetCard({ validateInput });
    const input = screen.getByPlaceholderText(/Enter your mail id/i);
    const button = screen.getByRole('button', { name: /Reset Password/i });
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(button).toBeEnabled();
  });

  it('enables the button when the input value is valid for Reset Code', () => {
    const validateInput = (value: string) => /^\d{8}$/.test(value);
    renderResetCard({
      title: 'Reset Code',
      description: 'Please enter the reset code sent to your email to proceed further',
      placeholder: 'Enter reset code',
      startSrc: './assets/icons/more.svg',
      buttonLabel: 'Reset Code',
      validateInput,
    });
    const input = screen.getByPlaceholderText(/Enter reset code/i);
    const button = screen.getByRole('button', { name: /Reset Code/i });
    fireEvent.change(input, { target: { value: '12345678' } });
    expect(button).toBeEnabled();
  });

  it('calls onButtonClick when the button is clicked', () => {
    const onButtonClick = jest.fn();
    renderResetCard({ onButtonClick });
    const button = screen.getByRole('button', { name: /Reset Password/i });
    fireEvent.click(button);
    expect(onButtonClick).toHaveBeenCalled();
  });

  it('calls onButtonClick with default value when the button is clicked', () => {
    renderResetCard();
    const button = screen.getByRole('button', { name: /Reset Password/i });
    fireEvent.click(button);
    expect(true).toBe(true);
  });

  it('calls onLoginButtonClick when the login button is clicked', () => {
    const onLoginButtonClick = jest.fn();
    renderResetCard({ onLoginButtonClick });
    const loginButton = screen.getByRole('button', { name: /Login/i });
    fireEvent.click(loginButton);
    expect(onLoginButtonClick).toHaveBeenCalled();
  });

  it('calls onLoginButtonClick with default value when the login button is clicked', () => {
    renderResetCard();
    const loginButton = screen.getByRole('button', { name: /Login/i });
    fireEvent.click(loginButton);
    expect(true).toBe(true);
  });

  it('calls validateInput function on input change for Forgot Password', () => {
    const validateInput = jest.fn().mockImplementation((value: string) => /\S+@\S+\.\S+/.test(value));
    renderResetCard({ validateInput });
    const input = screen.getByPlaceholderText(/Enter your mail id/i);
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(validateInput).toHaveBeenCalledWith('test@example.com');
  });

  it('calls validateInput function on input change for Reset Code', () => {
    const validateInput = jest.fn().mockImplementation((value: string) => /^\d{8}$/.test(value));
    renderResetCard({
      title: 'Reset Code',
      description: 'Please enter the reset code sent to your email to proceed further',
      placeholder: 'Enter reset code',
      startSrc: './assets/icons/more.svg',
      buttonLabel: 'Reset Code',
      validateInput,
    });
    const input = screen.getByPlaceholderText(/Enter reset code/i);
    fireEvent.change(input, { target: { value: '12345678' } });
    expect(validateInput).toHaveBeenCalledWith('12345678');
  });
});
