import React from 'react'
import Author from './Author'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'

const Posts = () => {
  const posts = useSelector(selectAllPosts)
  const renderedPosts = posts.map(post => (
      <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content.substring(0,100)}</p>
          <Author userId={post.userId}/>
          {console.log(post)}
      </article>
  ))
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default Posts