import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';

describe('UserProfile component', () => {
  it('renders without crashing', () => {
    render(<UserProfile />);
    const linkElement = screen.getByText(/My Account/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('displays user profile picture', () => {
    render(<UserProfile />);
    const profilePicture = screen.getByAltText(/user/i);
    expect(profilePicture).toBeInTheDocument();
  });

  it('displays user name', () => {
    render(<UserProfile />);
    const firstNameInput = screen.getByPlaceholderText(/First name/i);
    const lastNameInput = screen.getByPlaceholderText(/Last name/i);
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
  });

  it('displays user email and university', () => {
    render(<UserProfile />);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const universityInput = screen.getByPlaceholderText(/University/i);
    expect(emailInput).toBeInTheDocument();
    expect(universityInput).toBeInTheDocument();
  });

  it('displays logout and delete account buttons', () => {
    render(<UserProfile />);
    const logoutButton = screen.getByText(/Logout/i);
    const deleteAccountButton = screen.getByText(/Delete Account/i);
    expect(logoutButton).toBeInTheDocument();
    expect(deleteAccountButton).toBeInTheDocument();
  });
});
