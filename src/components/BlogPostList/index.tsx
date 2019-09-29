import React, { Fragment } from 'react'
import { BlogPost } from '../../types/blogPost'
import BlogPostListItem from './BlogPostListItem'

interface BlogPostListProps {
  posts: BlogPost[]
}

const BlogPostList = ({ posts }: BlogPostListProps) => (
  <Fragment>
    {posts.map((bp, i: number) => (
      <BlogPostListItem blogPost={bp} />
    ))}
  </Fragment>
)

export default BlogPostList
