import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }

    }

    render() {
       return (
           <aside>
               <button onClick = {this.toggle.bind(this)}>
                   {this.state.isOpen ? '<<<' : '>>>'}
               </button>
               {this.getComments()}
           </aside>
       )
    }

    getComments() {
        if (!this.state.isOpen) return null;
        const {comments} = this.props;
        const commentElements = comments.map(comment => {
            return <Comment comment = {comment} />
        });
        return commentElements;
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}