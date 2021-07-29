import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe('news search', () => {
  it('Renders a form and input and displays news stories list', () => {
    render(<NewsSearch/>);

    const searchInput = screen.getByLabelText('Search');
    fireEvent.change(searchInput, { target: { value: 'bitcoin' } });


    expect(searchInput).toHaveValue('bitcoin');
  });
});
