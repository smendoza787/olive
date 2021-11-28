import React from 'react'
import { BlogPost } from '../../types/blogPost'
import BlogPostListItem from './BlogPostListItem'

interface BlogPostListProps {
  posts: BlogPost[]
}

const BlogPostList = ({ posts }: BlogPostListProps) => (
  <section>
    {posts.map((bp, i: number) => (
      <BlogPostListItem key={bp.slug} blogPost={bp} />
    ))}
  </section>
)

export default BlogPostList
