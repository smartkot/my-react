import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import Accordion from '../decorators/Accordion';
import Userform from './Userform';

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired,
        // from Accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func

    };

    render() {
        const {articles, openItemId, toggleOpenItem} = this.props;
        const articleElements = articles.map(article => {
            return <Article
                key = {article.id}
                article = {article}
                isOpen = {article.id === openItemId}
                toggle = {toggleOpenItem(article.id)}
            />;
        });

        return (
            <section>
                <Userform />
                <h1>Articles</h1>
                {articleElements}
            </section>
        )
    }

}

export default Accordion(ArticleList);