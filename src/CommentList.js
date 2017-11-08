import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentList extends Component {

    static defaultProps = {
        comments: []
    };

    state = {
        isOpen: true
    };

    render() {
       return (
           <div>
               <button onClick = {this.toggle.bind(this)}>
                   {this.state.isOpen ? '<<<' : '>>>'}
               </button>
               {this.getComments()}
           </div>
       )
    }

    getComments() {
        if (!this.state.isOpen) return null;

        const {comments} = this.props;
        if (!comments.length) return <p>No comments yes</p>;

        const commentElements = comments.map(comment => {
            return <Comment key = {comment.id} comment = {comment} />
        });
        return commentElements;
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}