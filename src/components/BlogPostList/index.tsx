import React, { Fragment } from 'react'
import { BlogPost } from '../../types/blogPost'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import styled from 'styled-components'

interface BlogPostListProps {
  posts: BlogPost[]
}

const BlogPostListWrapper = styled.div`
  border: 1px solid black;
  padding: 2rem;
`

const BlogPostList = ({ posts }: BlogPostListProps) => (
  <Fragment>
    {posts.map((bp, i: number) => {
      const richContent = JSON.parse(bp.content.content);

      return (
        <BlogPostListWrapper>
          <h3>{bp.title}</h3>
          <h3>author: {bp.author}</h3>
          <p>date: {bp.date}</p>
          <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(richContent) }} />
        </BlogPostListWrapper>
      )
    })}
  </Fragment>
)

export default BlogPostList
