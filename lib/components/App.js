import React from 'react';
import axios from 'axios';

import DataApi from '../DataApi';
import ArticleList from './ArticleList';

class App extends React.Component {

  state = {
    articles: {},
    authors: {}
  };

  async componentDidMount() {
    const response = await axios.get('/data');
    const api = new DataApi(response.data);

    this.setState(() => ({
      articles: api.getArticles(),
      authors: api.getAuthors()
    }));
  }

  articleActions = {
    lookUpAuthor: (article) => this.state.authors[article.authorId]
  }

  render() {
    return (
      <ArticleList 
        articles={this.state.articles}
        articleActions={this.articleActions} />
    );
  }
}

export default App;