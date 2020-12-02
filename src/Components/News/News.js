import React, { useContext } from 'react'
import PostSnippetCard from '../PostSnippetCard/PostSnippetCard'
import {NewsContext} from '../ContextApi/ContextApi'
import '../News/News.css'


function News() {

    const [news , setNews] = useContext(NewsContext);

    return (
        <div className="news_section">
            {
                news.map((articlesData, index) => {
                    return <PostSnippetCard
                        key={index}
                        id={index}
                        description={articlesData.description}
                        title={articlesData.title}
                        image={articlesData.image}
                    />
                })
            }
        </div>
    )
}

export default News
