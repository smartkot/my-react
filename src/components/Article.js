import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import './styles.css';

class Article extends Component {

    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }),
        isOpen: PropTypes.bool,
        toggle: PropTypes.func
    };

    state = {
        indexUpdate: 0
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.isOpen !== this.props.isOpen;
    // }

    // componentDidMount() {
    //     console.log('---', 'mounting')
    // }
    //
    // componentDidUpdate() {
    //     console.log('---', 'updating')
    // }

    render() {
        const {article, isOpen, toggle} = this.props;

        console.log('---', 'update article');

        return (
            <article>
                <h2>{article.title}</h2>
                <button onClick = {toggle}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </article>
        )
    }

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return (
            <div>
                {article.text}
                <button onClick = {() => this.setState({indexUpdate: this.state.indexUpdate + 1})}>ClickMe</button>
                {this.getComments()}
            </div>
        );
    }

    getComments() {
        const {article} = this.props;
        return <CommentList comments = {article.comments} key = {this.state.indexUpdate}/>;
    }

}

// export default ToggleClick(Article)
export default Article