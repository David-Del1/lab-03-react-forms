import React from 'react';
import { render } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
  it('renders articles', () => {
    const article = {
      title: 'bitcoin',
      author: 'David Delgadillo',
      description: 'nice'
    };

    const { asFragment } = render(<Article article={article}/>);

    expect(asFragment()).toMatchSnapshot();
  });
});
