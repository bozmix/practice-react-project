import React from "react";
import './BlogList.css';
import { blogPosts } from "../../data/blog-posts";
import { Blog } from "../Blog/Blog";

export const BlogList = () => {
    return (
        <div className="blogList">
            {blogPosts.map((post, index) => <Blog key = {index} post = {post}/>)}
        </div>
    )
}