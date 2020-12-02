import React, { useContext, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { NewsContext } from '../ContextApi/ContextApi'
import '../Article/Article.css'

function Article() {

    const [news, setNews] = useContext(NewsContext);
    const [post, setPost] = useState([])
    const { id } = useParams();

    useEffect(() => {
        news.map((articlesData, index) => {
            if (id == index) {
                setPost(articlesData);
            }
        })
    }, [])


    return (
        <div className="post">
            <h1>{post.title}</h1>
            <h5>{post.description}</h5>
            <img src={post.image} alt={post.title} />
            <p>{post.content}</p>
        </div>
    )
}

export default Article
