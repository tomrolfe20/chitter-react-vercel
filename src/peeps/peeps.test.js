import React from 'react';
import { render, screen } from '@testing-library/react';
import Peeps from './peeps';

describe('Peeps', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders Peep component', () => {

    render(<Peeps />);

    const loading = screen.getByText('loading...');
    const test = screen.getByTestId('peeps-test');

    expect(loading).toBeInTheDocument();
    expect(test).toBeInTheDocument();
  });
});
