import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import ArticleList from './components/ArticleList';
// import {articles} from './fixtures';
//
// ReactDOM.render(<ArticleList articles = {articles} />, document.getElementById('root'));
//
