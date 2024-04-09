import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Finish from '../src/Pages/home/signupfinish';

describe('Finish component', () => {
  // Test that the component renders without crashing
  test('renders without crashing', () => {
    render(<Finish />);
  });

  // Test that the profile picture input field renders correctly
  test('renders profile picture input field', () => {
    render(<Finish />);
    const profilePictureInput = screen.getByLabelText('upload new picture');
    expect(profilePictureInput).toBeInTheDocument();
  });

  // Test that the first name input field renders correctly
  test('renders first name input field', () => {
    render(<Finish />);
    const firstNameInput = screen.getByLabelText('First Name');
    expect(firstNameInput).toBeInTheDocument();
  });

  // Test that the last name input field renders correctly
  test('renders last name input field', () => {
    render(<Finish />);
    const lastNameInput = screen.getByLabelText('Last Name');
    expect(lastNameInput).toBeInTheDocument();
  });

  // Test that the university input field renders correctly
  test('renders university input field', () => {
    render(<Finish />);
    const universityInput = screen.getByLabelText('University');
    expect(universityInput).toBeInTheDocument();
  });

  // Test that the form submits successfully when all fields are filled
  test('submits form successfully when all fields are filled', () => {
    render(<Finish />);
    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const universityInput = screen.getByLabelText('University');
    const submitButton = screen.getByText('Finish');

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(universityInput, { target: { value: 'Harvard University' } });
    fireEvent.click(submitButton);

    // Add your assertion for successful form submission
  });

  // Test that the form does not submit when any of the required fields are empty
  test('does not submit form when required fields are empty', () => {
    render(<Finish />);
    const submitButton = screen.getByText('Finish');

    fireEvent.click(submitButton);

    // Add your assertion for form submission failure
  });
});
