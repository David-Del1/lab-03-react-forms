import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article }) => (
  <div>
    <h1>{article.title}</h1>
    <p>{article.author}</p>
    <p> {article.description}</p>
  </div>
);

Article.propTypes = {
  article: PropTypes.object.isRequired
};

export default Article;
