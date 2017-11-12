import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import Accordion from '../decorators/Accordion';
import Userform from './Userform';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import FadeInAndOut from './Mytransition';


class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired,
        // from Accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func
    };

    state = {
        selection: null
    };

    render() {
        const {articles, openItemId, toggleOpenItem} = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));

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
                <FadeInAndOut />
                <Userform />
                <Select options = {options}
                        value = {this.state.selection}
                        onChange = {this.changeSelection}
                        multi = {true} />
                <h1>Articles</h1>
                {articleElements}
            </section>
        )
    }

    changeSelection = (selection) => this.setState({selection})
}



export default Accordion(ArticleList);