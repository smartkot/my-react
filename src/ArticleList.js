import React from 'react';
import Article from './Article';

export default function ArticleList({articles}) {

    const articleElements = articles.map(article => {
        return <Article key = {article.id} article = {article} />;
    });

    return (
        <section>
            <h1>Articles</h1>
            {articleElements}
        </section>
    )
}