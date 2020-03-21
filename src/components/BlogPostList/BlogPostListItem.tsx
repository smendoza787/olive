import React from 'react'
import { BlogPost } from '../../types/blogPost'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import Link from 'gatsby-link'
import { printRelativeDate } from '../../helpers/date'
import {
  BlogPostListItemWrapper,
  BPHeader,
  BPTitle,
  BPTimestamp,
  BPBody,
  BPImage,
  BPContentWrapper,
  BPRichContent,
  BPInnerContentWrapper,
} from './styled'
interface BlogPostListItemProps {
  blogPost: BlogPost
}

const BlogPostListItem = ({ blogPost }: BlogPostListItemProps) => {
  const richContent = JSON.parse(blogPost.content.content)
  const imageSrc = 'https://' + blogPost.image.file.url.slice(2)

  return (
    <BlogPostListItemWrapper>
      <BPHeader>
        <BPTitle to={`/${blogPost.slug}`}>{blogPost.title}</BPTitle>
      </BPHeader>
      <BPBody>
        <BPImage to={`/${blogPost.slug}`} src={imageSrc} />
        <BPContentWrapper>
          <BPRichContent dangerouslySetInnerHTML={{ __html: `${documentToHtmlString(richContent).slice(0, 160)}...` }} />
          <BPInnerContentWrapper>
            <Link to={`/${blogPost.slug}`}>Read more</Link>
            <BPTimestamp>
              <i className="fas fa-calendar-edit">&nbsp;</i>
              {printRelativeDate(blogPost.date)}
            </BPTimestamp>
          </BPInnerContentWrapper>
        </BPContentWrapper>
      </BPBody>
    </BlogPostListItemWrapper>
  )
}

export default BlogPostListItem
