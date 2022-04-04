import React from "react";
import './Blog.css';

export const Blog = (props) => {
    return (
        <div className="blogItem" key={props.key}>
            <h2>{props.post.title}</h2>
            <p>{props.post.body}</p>
        </div>
    )
}