import React from 'react';
import { render } from '@testing-library/react';
import ArticleList from './ArticleList.jsx';

describe('Article list', () => {
  it('renders a title, author, and description', () => {
    const articles = [{
      title: 'Lorem ipsum',
      author: 'lorem',
      description: 'lorem'
    },
    {
      title: 'lorem2',
      author: 'ipsum',
      description: 'hello'
    }];

    const { asFragment } = render(<ArticleList articles={articles} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
