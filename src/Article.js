import React, {Component} from 'react';

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    render() {
        const {article} = this.props;
        return (
            <div>
                <h2>{article.title}</h2>
                <button onClick = {this.toggle}>
                    {this.state.isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;
        const {article} = this.props;
        return <p>{article.text}</p>;
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