import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import CreateAccount from '../src/Pages/home/createaccount';

describe('CreateAccount component', () => {
  it('renders without crashing', () => {
    render(<CreateAccount />);
  });
  

  it('displays email input field', () => {
    const { getByLabelText } = render(<CreateAccount />);
    const emailInput = getByLabelText('E-mail Address');
    expect(emailInput).toBeInTheDocument();
  });

  it('displays password input field', () => {
    const { getByLabelText } = render(<CreateAccount />);
    const passwordInput = getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument();
  });

  it('displays confirm password input field', () => {
    const { getByLabelText } = render(<CreateAccount />);
    const confirmPasswordInput = getByLabelText('Confirm Password');
    expect(confirmPasswordInput).toBeInTheDocument();
  });

  it('displays submit button', () => {
    const { getByText } = render(<CreateAccount />);
    const submitButton = getByText('Create an Account');
    expect(submitButton).toBeInTheDocument();
  });

  it('displays Google sign-in button', () => {
    const { getByText } = render(<CreateAccount />);
    const googleButton = getByText('Continue with Google');
    expect(googleButton).toBeInTheDocument();
  });

  it('shows alert if email field is empty on submit', async () => {
    const { getByText } = render(<CreateAccount />);
    const submitButton = getByText('Create an Account');
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(getByText('Please fill in all fields')).toBeInTheDocument();
    });
  });

  // Add more test cases for other validation scenarios and functionality

});
