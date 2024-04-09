import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Login from '../src/Pages/home/login';

describe('Login component', () => {
  it('should render the login form', () => {
    const { getByLabelText, getByText } = render(<Login />);
    
    expect(getByLabelText('E-mail Address')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });

  it('should display error message for invalid email format', async () => {
    const { getByLabelText, getByText } = render(<Login />);
    const emailInput = getByLabelText('E-mail Address');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(getByText('Invalid email format')).toBeInTheDocument();
    });
  });

  it('should display error message for empty fields', async () => {
    const { getByLabelText, getByText } = render(<Login />);
    const emailInput = getByLabelText('E-mail Address');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');

    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.change(passwordInput, { target: { value: '' } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(getByText('Please fill in all fields')).toBeInTheDocument();
    });
  });

  // You can write more test cases for other scenarios like successful login, Google sign-in, etc.
});
