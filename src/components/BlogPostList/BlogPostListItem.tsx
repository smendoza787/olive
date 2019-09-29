import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { BlogPost } from '../../types/blogPost'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import Link from 'gatsby-link'
import { desktopOnly } from '../../helpers/styled'

const BlogPostListItemWrapper = styled.div`
  padding: 3rem 0;
  font-family: 'Roboto Slab', sans-serif;

  &:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }
`

const BPTitle = styled(Link)`
  font-family: 'Roboto Slab', sans-serif;
  margin-right: 0.75rem;
  text-decoration: none;
  color: #000;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.75rem;
  line-height: 1.75rem;
`

const BPTimestamp = styled.p`
  font-size: 0.8rem;
  color: lightgray;
  text-align: center;
`

const BPHeader = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;

  ${desktopOnly`
    flex-direction: row;
    justify-content: space-between;
  `}
`

const BPImage = styled(Link)<{ src: string }>`
  width: 100%;
  height: 10rem;
  background-size: cover;
  background-position: center;
  background-image: url(${({ src }) => src});

  ${desktopOnly`
    width: 90rem;
  `}
`
const BPBody = styled.div`
  display: flex;
  flex-direction: column;

  ${desktopOnly`
    flex-direction: row;
  `}
`

const BPRichContent = styled.div`
  padding: 1rem 0;
  text-align: justify;

  ${desktopOnly`
    padding: 0;
  `}
`

const BPContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${desktopOnly`
    padding-left: 1rem;
  `}
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
        <BPTitle to={`/${blogPost.slug}`}>{blogPost.title}</BPTitle>
        <BPTimestamp>
          <i className="fas fa-calendar-edit">&nbsp;</i>
          {prettyPrintDate(blogPost.date)}
        </BPTimestamp>
      </BPHeader>
      <BPBody>
        <BPImage to={`/${blogPost.slug}`} src={imageSrc} />
        <BPContentWrapper>
          <BPRichContent dangerouslySetInnerHTML={{ __html: `${documentToHtmlString(richContent).slice(0, 250)}...` }} />
          <Link to={`/${blogPost.slug}`}>Read more</Link>
        </BPContentWrapper>
      </BPBody>
    </BlogPostListItemWrapper>
  )
}

export default BlogPostListItem
