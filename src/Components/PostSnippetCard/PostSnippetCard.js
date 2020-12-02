import React from 'react'
import { Link } from "react-router-dom";
import '../PostSnippetCard/PostSnippetCard.css'

var styles={
    textDecoration: 'none',
}

function PostSnippetCard({ id, description, title, image }) {

    const str = title.replaceAll(' ', "-").replaceAll('%' , '-');

    return (
        <div className="Card">
            <img className="card_img" src={image} alt={title} />
            <div className="card_text">
                <h3>{title.slice(0, 50)}...</h3>
                <p>{description.slice(0, 100)}...</p>
                <Link style={styles} to={`/${id}/${str}/`}><button>Read More</button></Link>
            </div>
        </div >
    )
}

export default PostSnippetCard
