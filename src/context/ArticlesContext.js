import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const ArticlesContext = createContext()

const baseUrl = process.env.REACT_APP_API_BASE_URL
const APIKey = process.env.REACT_APP_API_KEY

export function ArticleProvider(props){
    const [articles, setArticles] = useState()
    const [country, setCountry] = useState('il');
    const [category, setCategory] = useState('general')
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    let APIUrl

    async function getArticles(){
        setLoading(true)
        
        search ? 
        APIUrl = `${baseUrl}/everything?q=${search}${APIKey}`
        :
        APIUrl = `${baseUrl}/top-headlines?category=${category}&country=${country}&pageSize=100${APIKey}`
        
        if(baseUrl.includes("netlify")){
            APIUrl = APIUrl.replace("/everything", "")
            APIUrl = APIUrl.replace("/top-headlines", "")
        }
        const result = await axios.get(APIUrl)
        const filteredArticles = result.data.articles.filter(article => {
            if(article.urlToImage && article.description) return true
        })
        setArticles(filteredArticles)
        setLoading(false)
        setSearch('')
        console.log(result)
    }

    useEffect(() => {
        getArticles()
    }, [country, category])

    useEffect(() => {
        search && getArticles()
    }, [search])

    return(
        <ArticlesContext.Provider value={[articles, setArticles, country, setCountry, category, setCategory, loading, search, setSearch]}>
            {props.children}
        </ArticlesContext.Provider>
    )
}