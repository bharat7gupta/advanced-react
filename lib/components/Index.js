import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  state = {
    value: 40
  };

  asyncFunc = () => {
    return Promise.resolve(60);
  }

  async componentDidMount() {
    this.setState({
      value: await this.asyncFunc()
    });
  }

  render() {
    return (
      <h2>Hello React Class Components: {this.state.value}</h2>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));