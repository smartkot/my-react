import React, { Component } from 'react';
import store from './store';
import {Provider} from 'react-redux';

import Counter from './components/Counter';
import ArticleList from './components/ArticleList';

import logo from './logo.svg';
import './App.css';


class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <Counter/>
                    <hr/>
                    <ArticleList/>
                </div>
            </Provider>
        );
    }
}

export default App;
