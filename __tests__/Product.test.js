import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { unistorecontext } from '../../Context/unistorecontextProvider';
import Product from '../src/Pages/home/product';

describe('Product component', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter initialEntries={['/product/1']}>
        <Route path="/product/:productId">
          <unistorecontext.Provider value={{ all_items: [{ id: 1 }] }}>
            <Product />
          </unistorecontext.Provider>
        </Route>
      </MemoryRouter>
    );
  });

  it('displays product details', () => {
    const product = { id: 1, name: 'Test Product', price: 10 };
    const { getByText } = render(
      <MemoryRouter initialEntries={['/product/1']}>
        <Route path="/product/:productId">
          <unistorecontext.Provider value={{ all_items: [product] }}>
            <Product />
          </unistorecontext.Provider>
        </Route>
      </MemoryRouter>
    );
    expect(getByText('Test Product')).toBeInTheDocument();
    expect(getByText('$10')).toBeInTheDocument();
  });

  // Add more test cases as needed
});
