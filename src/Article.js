import React, {Component} from 'react';
import CommentList from './CommentList';

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        }
    }

    render() {
        const {article} = this.props;
        return (
            <article>
                <h2>{article.title}</h2>
                <button onClick = {this.toggle}>
                    {this.state.isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}

            </article>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;
        const {article} = this.props;
        return (
            <p>
                {article.text}
                {this.getComments()}
            </p>
        );
    }

    getComments() {
        const {article} = this.props;
        return <CommentList comments = {article.comments} />;
    }

    toggle = () => {
        this.setState({
           isOpen: !this.state.isOpen
        });
    }
}

// export default function Article(props) {
//     console.log('---', props);
//     const {article} = props;
//     return (
//         <div>
//             <h2>{article.title}</h2>
//             <p>{article.text}</p>
//         </div>
//     )
// }