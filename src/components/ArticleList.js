import React, {Component} from 'react';
import Article from './Article';

class ArticleList extends Component {

    state = {
      openArticleId: null
    };

    render() {
        const articleElements = this.props.articles.map(article => {
            return <Article
                key = {article.id}
                article = {article}
                isOpen = {article.id === this.state.openArticleId}
                toggle = {this.toggleOpen.bind(this, article.id)}
            />;
        });

        return (
            <section>
                <h1>Articles</h1>
                {articleElements}
            </section>
        )
    }

    toggleOpen(openArticleId) {
        this.setState({
            openArticleId
        });
    }

}

export default ArticleList;