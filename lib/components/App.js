import React from 'react';

import ArticleList from './ArticleList';

class App extends React.Component {

  state = this.props.store.getState();

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