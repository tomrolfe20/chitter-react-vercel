import React from 'react';
import { render, screen } from '@testing-library/react';
import Peep from './peep';

describe('Peep', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders Peep component', () => {
    render(<Peep />);

    const test = screen.getByTestId('peep-test');

    expect(test).toBeInTheDocument();
  });
});
