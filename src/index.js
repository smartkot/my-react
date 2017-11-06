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
import Article from './Article';
import {articles} from './fixtures';

const article = articles[0];

ReactDOM.render(<Article article = {article} />, document.getElementById('root'));

