import React from 'react';
import PropTypes from 'prop-types';
import Article from '../article/Article';


const ArticleList = ({ articles }) => {
  const listItems = articles.map(article => (
    <li
      key={article.title}
    >
      <Article article={article}/>
    </li>
  ));
  return <ul>{listItems}</ul>;
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  )
};

export default ArticleList;
