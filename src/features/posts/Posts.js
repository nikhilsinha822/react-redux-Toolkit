import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts, getPostsError, getPostsStatus } from './postsSlice'
import PostsExcert from './PostsExcert'

const Posts = () => {
  const posts = useSelector(selectAllPosts)
  const postsStatus = useSelector(getPostsStatus)
  const postsError = useSelector(getPostsError)

  let content;
  if (postsStatus === 'loading') {
    content = <p>Loading....</p>;
  } else if (postsStatus === "succeeded") {
    content = posts.map(post => <PostsExcert key={post.id} post={post} />)
  } else if (postsStatus === 'failed') {
    content = <p>{postsError}</p>
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  )
}

export default Posts