export const Article = ({article}) => {
    return (
        <article>
            <img
                src={article.image}
                width="250"
                height="200"
                alt={article.alt}
            />
            <div className="article-text">
                {article.text}
            </div>
        </article>
    );
};