import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';

export default class Article extends Component {

    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    };

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