import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders home page by default', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const homeElement = screen.getByText(/Welcome to UniStore/i);
  expect(homeElement).toBeInTheDocument();
});

test('renders About page when "/About" path is accessed', () => {
  render(
    <MemoryRouter initialEntries={['/About']}>
      <App />
    </MemoryRouter>
  );
  const aboutElement = screen.getByText(/About Us/i);
  expect(aboutElement).toBeInTheDocument();
});

test('renders Login page when "/Login" path is accessed', () => {
  render(
    <MemoryRouter initialEntries={['/Login']}>
      <App />
    </MemoryRouter>
  );
  const loginElement = screen.getByText(/Login/i);
  expect(loginElement).toBeInTheDocument();
});

// Add more test cases for other routes as needed
