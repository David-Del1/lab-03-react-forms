import React, { Component } from 'react';
import NewsSearch from '../../containers/NewsSearch';


export default class App extends Component {
  state ={
    text: 'cookies',
  }

  handleChange = ({ target }) => {
    this.setState({ text: target.value });
  }

  render() {
    return (
      <>
        <NewsSearch />
      </>
    );
  }
}

