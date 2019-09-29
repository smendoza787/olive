import React from 'react'
import styled from 'styled-components'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import moment from 'moment'
import { BlogPost } from '../../types/blogPost'

const BlogPostListItemWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
  font-family: 'Roboto Slab', sans-serif;
`

const BPTitle = styled.h3`
  font-family: 'Roboto Slab', sans-serif;
  font-size: 2.5rem;
`

const BPTimestamp = styled.p`
  font-size: 0.9rem;
  color: lightgray;
`

const BPHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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

const prettyPrintDate = (date: any) => `${moment(date).fromNow()}`

const BlogPostListItem = ({ blogPost }: BlogPostListItemProps) => {
  const richContent = JSON.parse(blogPost.content.content)
  const imageSrc = 'https://' + blogPost.image.file.url.slice(2)

  return (
    <BlogPostListItemWrapper>
      <BPHeader>
        <BPTitle>{blogPost.title}</BPTitle>
        <BPTimestamp>
          <i className="fas fa-calendar-edit">&nbsp;</i>
          {prettyPrintDate(blogPost.date)}
        </BPTimestamp>
      </BPHeader>
      <BPImage src={imageSrc} />
      <div dangerouslySetInnerHTML={{ __html: `${documentToHtmlString(richContent).slice(0, 500)}...` }} />
    </BlogPostListItemWrapper>
  )
}

export default BlogPostListItem
