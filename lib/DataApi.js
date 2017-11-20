class DataApi {

  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
    };
  }

  mapIntoObject(array) {
    return array.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  lookUpAuthor(article) { 
    return this.data.authors[article.authorId];
  }

  getState() {
    return {
      articles: this.data.articles,
      authors: this.data.authors
    };
  }
}

export default DataApi;
