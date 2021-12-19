import { useContext, useEffect, useState } from "react"
import Article from "./Article"
import { ArticlesContext } from "../context/ArticlesContext"
import LinearProgress from '@mui/material/LinearProgress';
import Pagination from '@mui/material/Pagination';
import "../styles/Articles.css"

function Articles() {
    const [articles, setArticles, country, setCountry, category, setCategory, loading, search, setSearch] = useContext(ArticlesContext)
    const [page, setPage] = useState(1)

    function handlePageChange(e, value){
        setPage(value)
    }

    useEffect(() => {
        setPage(1)
    }, [articles])
    
    return (
        <div>
            {loading ? 
                <div className="loading-container">
                    <LinearProgress/>
                </div>
            :
                articles?.length > 0 ? 
                    <div>
                        <div className="articles">
                            {articles.map((article, i) => {
                                if(page*9 < i+1 || page*9-8 > i+1) return // Filter articles by page
                                return <Article key={i} article={article} />
                            })}
                        </div>
                        <div dir="ltr" className="page-selector">
                            <Pagination sx={{display: "inline-block"}} count={Math.ceil(articles.length/9)} shape="rounded" onChange={handlePageChange}/>
                        </div>
                    </div>
                :
                    <p>מצטערים, לא נמצאו כתבות</p>
            }
        </div>
    )
}

export default Articles
