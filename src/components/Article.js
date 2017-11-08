import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import ToggleClick from '../decorators/ToggleClick';

class Article extends Component {

    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    };

    render() {
        const {article, isOpen, toggle} = this.props;
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
                {this.getComments()}
            </div>
        );
    }

    getComments() {
        const {article} = this.props;
        return <CommentList comments = {article.comments} />;
    }

}

export default ToggleClick(Article)