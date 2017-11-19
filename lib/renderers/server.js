import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import config from '../config';
import App from '../components/App';
import DataApi from '../DataApi';

const serverRender = async () => {
  const response = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new DataApi(response.data);

  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App store={store} />
    ),
    initialData: response.data
  };
};

export default serverRender;
