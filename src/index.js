// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from './ArticleList';
import {articles} from './fixtures';

ReactDOM.render(<ArticleList articles = {articles} />, document.getElementById('root'));

