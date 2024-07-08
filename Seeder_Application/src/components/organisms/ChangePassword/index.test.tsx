import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChangePassword from '.';
import theme from '../../../theme';
import IconPath from '../../../utils/Constants';

describe('ChangePassword Component', () => {
  const mockHandlePassword = jest.fn();
  const mockHandleChangePassword = jest.fn();
  const mockHandleFormSubmit = jest.fn();

  const ChangePasswordDefault = () => {
    render(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ChangePassword
          password=""
          changePassword=""
          handlePassword={mockHandlePassword}
          handleChangePassword={mockHandleChangePassword}
          handleFormSubmit={mockHandleFormSubmit}
        />
      </ThemeProvider>
    );
  };

  it('should render the component correctly', () => {
    ChangePasswordDefault();
    const changePasswordElements = screen.getAllByText('Change Password');
    expect(changePasswordElements[0]).toBeInTheDocument();
    expect(
      screen.getByText('Password must contain at least 7 letters and 1 number')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Change Password' })
    ).toBeDisabled();
  });

  it('Checking Password Field', () => {
    ChangePasswordDefault();
    const allPasswords = screen.getAllByPlaceholderText('');
    const passwordInput = allPasswords[0];
    const changePasswordInput = allPasswords[1];

    expect(passwordInput).toBeInTheDocument();
    expect(changePasswordInput).toBeInTheDocument();

    const ChangePasswordBtn = screen.getByRole('button', {
      name: 'Change Password',
    });
    expect(ChangePasswordBtn).toBeDisabled();

    fireEvent.change(passwordInput, { target: { value: 'Password1' } });
    expect(mockHandlePassword).toHaveBeenCalledTimes(1);

    fireEvent.change(changePasswordInput, { target: { value: 'Password1' } });
    expect(mockHandleChangePassword).toHaveBeenCalled();

    // Test Mismatched Passwords
    fireEvent.change(changePasswordInput, {
      target: { value: 'DifferentPassword' },
    });
    expect(ChangePasswordBtn).toBeDisabled();
  });

  it('Checking Different Password Field', () => {
    const password = 'password123';
    const changePassword = 'password123';

    render(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ChangePassword
          password={password}
          changePassword={changePassword}
          handlePassword={mockHandlePassword}
          handleChangePassword={mockHandleChangePassword}
          handleFormSubmit={mockHandleFormSubmit}
        />
      </ThemeProvider>
    );

    const ChangePasswordBtn = screen.getByRole('button', {
      name: 'Change Password',
    });
    expect(ChangePasswordBtn).toBeInTheDocument();
    expect(ChangePasswordBtn).toBeEnabled(); // enabled
  });

  it('Checking icons existence', () => {
    ChangePasswordDefault();
    const passwordLockIcon = screen.getByAltText('Password Icon');
    expect(passwordLockIcon).toBeInTheDocument();
    expect(passwordLockIcon).toHaveAttribute('src', IconPath.Lock);

    const passwordEyeIcon = screen.getByAltText('Eye Icon');
    expect(passwordEyeIcon).toBeInTheDocument();
    expect(passwordEyeIcon).toHaveAttribute('src', IconPath.Eye);

    const changePasswordLockIcon = screen.getByAltText('Change Password Icon');
    expect(changePasswordLockIcon).toBeInTheDocument();
    expect(changePasswordLockIcon).toHaveAttribute('src', IconPath.Lock);
  });
});
