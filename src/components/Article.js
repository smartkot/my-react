import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteArticle} from '../AC';
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
                <button className={'button-flat'} onClick = {toggle}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                <button className={'button-flat'} onClick = {this.handleDelete}>
                    Delete Me
                </button>
                <small>{this.getBody()}</small>
            </article>
        )
    }

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return (
            <div>
                {article.text}
                {this.getComments()}
            </div>
        );
    }

    getComments() {
        const {article} = this.props;
        return <CommentList comments = {article.comments} key = {this.state.indexUpdate}/>;
    }

    handleDelete = () => {
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id);
        console.log('---', 'deleting');
    }

}

// export default ToggleClick(Article)
export default connect(null, { deleteArticle })(Article);