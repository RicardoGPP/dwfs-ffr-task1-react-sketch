import { useEffect, useState } from 'react';
import { Article } from './Article';

export const ArticlePanel = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setArticles(getMockedArticles());
    }, []);

    return (
        <section className="article-panel">
            {
                articles.map((article,) => (
                    <Article
                        key={article.id}
                        article={article}
                    />
                ))
            }
        </section>
    );
};

function getMockedArticles() {
    const articles = [];

    for (let i = 1; i <= 3; i++) {
        articles.push({
            id: i,
            image: 'article-image.png',
            alt: `Article ${i}`,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas et est est. Nullam nec interdum dui. Proin in sem
            consectetur risus commodo porta. Mauris ex orci, ultricies
            ac ex at, eleifend luctus quam. Proin nec tortor nibh.
            Curabitur condimentum ligula id purus mollis posuere in et
            lectus. Donec diam diam, mattis eget mattis sit amet, bibendum
            in nibh. Mauris ut massa purus. Donec convallis libero ac nisl
            congue, non venenatis erat tincidunt. Etiam sollicitudin viverra
            felis ut malesuada. Pellentesque ornare hendrerit lorem, eu tempor
            velit. Cras pulvinar nisi aliquam erat facilisis, vel lobortis
            neque tincidunt. Ut sit amet ligula eu velit pellentesque mattis.`
        });
    }

    return articles;
}