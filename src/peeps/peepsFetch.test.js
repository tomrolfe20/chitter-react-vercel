import React from 'react';
import { render, screen } from '@testing-library/react';
import PeepsFetch from './peepsFetch';

describe('PeepsFetch', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders Peep component', () => {
    const peeps = [
      {
        id: 1,
        body: 'Hello world',
        user: { handle: 'sparky' },
      },
    ];

    fetch.mockResponseOnce(JSON.stringify({ peeps }));

    render(<PeepsFetch />);

    const loading = screen.getByText('Peeps loading...');


    expect(loading).toBeInTheDocument();
  });
});
