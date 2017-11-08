import React, {Component} from 'react';
import Comment from './Comment';
import ToggleClick from '../decorators/ToggleClick';

class CommentList extends Component {

    static defaultProps = {
        comments: []
    };

    render() {
        const {isOpen, toggle} = this.props;

       return (
           <div>
               <button onClick = {toggle}>
                   {isOpen ? 'hide' : 'show'}
               </button>
               {this.getComments()}
           </div>
       )
    }

    getComments() {
        const {comments, isOpen} = this.props;
        if (!isOpen) return null;

        if (!comments.length) return <p>No comments yes</p>;

        const commentElements = comments.map(comment => {
            return <Comment key = {comment.id} comment = {comment} />
        });
        return commentElements;
    }

}

export default ToggleClick(CommentList)