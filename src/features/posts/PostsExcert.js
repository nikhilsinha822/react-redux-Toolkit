import React from 'react'
import Author from './Author'
import TimeAgo from '../TimeAgo'
import Reaction from '../Reaction'

const PostsExcert = ({ post }) => {
    return (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}</p>
            <Author userId={post.userId} />
            <TimeAgo timestamp={post.date} />
            <Reaction post={post} />
        </article>
    )
}

export default PostsExcert