import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const ArticlesContext = createContext()

const baseUrl = "https://newsapi.org/v2"
const APIKey = "&apiKey=7801956d0e08493f86b4ea7ecfa09769"
const exampleAPIKey = "&apiKey=4971b5051f9c4026aade80339e9b0ed8"

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