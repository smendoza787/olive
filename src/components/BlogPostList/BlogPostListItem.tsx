import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { BlogPost } from '../../types/blogPost'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import Link from "gatsby-link"

const BlogPostListItemWrapper = styled.div`
  padding: 3rem 0;
  font-family: 'Roboto Slab', sans-serif;
  border-bottom: 1px solid lightgray;
`

const BPTitle = styled(Link)`
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.8rem;
  margin-right: 0.75rem;
  text-decoration: none;
  color: #000;
`

const BPTimestamp = styled.p`
  font-size: 0.75rem;
  color: lightgray;
  margin: -5px;
`

const BPHeader = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 1rem 0;
`

const BPImage = styled.div<{ src: string }>`
  min-width: 20rem;
  max-width: 20rem;
  height: 10rem;
  flex-grow: 2;
  background-size: cover;
  background-position: center;
  background-image: url(${({ src }) => src});
`
const BPBody = styled.div`
  display: flex;
  align-items: flex-start;
`

const BpRichContent = styled.div`
  padding: 0 1rem;
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
        <BPTitle to="/">{blogPost.title}</BPTitle>
        <BPTimestamp>
          <i className="fas fa-calendar-edit">&nbsp;</i>
          {prettyPrintDate(blogPost.date)}
        </BPTimestamp>
      </BPHeader>
      <BPBody>
        <BPImage src={imageSrc} />
        <BpRichContent dangerouslySetInnerHTML={{ __html: `${documentToHtmlString(richContent).slice(0, 250)}...` }} />
      </BPBody>
    </BlogPostListItemWrapper>
  )
}

export default BlogPostListItem
