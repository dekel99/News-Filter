import Card from "@mui/material/Card"
import "../styles/Article.css"

function Article({article}) {
    return (
        <Card sx={{ maxWidth: 300, position: "relative" }}>
            <div className='article'>
                <img className="article-img" src={article.urlToImage} alt=""></img>
                <div className="article-text-container">
                    <h3 className="article-title"><a rel="noreferrer" target="_blank" href={article.url}>{article.title}</a></h3>
                    <p className="article-description">{article.description}</p>
                </div>
            </div>
            <p className="article-source">מקור: {article.source.name}</p>
        </Card>
    )
}

export default Article
