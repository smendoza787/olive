import React from 'react'
import { BlogPost } from '../../types/blogPost'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import Link from 'gatsby-link'
import { prettyPrintDate } from '../../helpers/date'
import { BlogPostListItemWrapper, BPHeader, BPTitle, BPTimestamp, BPBody, BPImage, BPContentWrapper, BPRichContent } from './styled'
import styled from 'styled-components'

interface BlogPostListItemProps {
  blogPost: BlogPost
}

const BPTimeStampNudge = styled(BPTimestamp)`
  margin-bottom: 0.5rem;
`

const BlogPostListItem = ({ blogPost }: BlogPostListItemProps) => {
  const richContent = JSON.parse(blogPost.content.content)
  const imageSrc = 'https://' + blogPost.image.file.url.slice(2)

  return (
    <BlogPostListItemWrapper>
      <BPHeader>
        <BPTitle to={`/${blogPost.slug}`}>{blogPost.title}</BPTitle>
        <BPTimeStampNudge>
          <i className="fas fa-calendar-edit">&nbsp;</i>
          {prettyPrintDate(blogPost.date)}
        </BPTimeStampNudge>
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
