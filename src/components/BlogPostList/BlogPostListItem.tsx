import React from 'react'
import styled from 'styled-components'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

import { BlogPost } from '../../types/blogPost'

const BlogPostListItemWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
  font-family: 'Roboto Slab', sans-serif;
`

const BPImage = styled.div<{ src: string }>`
  height: 15rem;
  background-size: cover;
  background-position: center;
  background-image: url(${({ src }) => src});
`

interface BlogPostListItemProps {
  blogPost: BlogPost
}

const BlogPostListItem = ({ blogPost }: BlogPostListItemProps) => {
  const richContent = JSON.parse(blogPost.content.content)
  const imageSrc = 'https://' + blogPost.image.file.url.slice(2)

  return (
    <BlogPostListItemWrapper>
      <BPImage src={imageSrc} />
      <h3>{blogPost.title}</h3>
      <h3>author: {blogPost.author}</h3>
      <p>date: {blogPost.date}</p>
      <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(richContent) }} />
    </BlogPostListItemWrapper>
  )
}

export default BlogPostListItem
