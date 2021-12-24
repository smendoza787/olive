import React from 'react'
import { BlogPost } from '../../types/blogPost'
import Link from 'gatsby-link'
import { printRelativeDate } from '../../helpers/date'
import {
  Circle,
  BlogPostListItemWrapper,
  BPHeader,
  BPMacHeader,
  BPTitle,
  BPTimestamp,
  BPBody,
  BPImage,
  BPContentWrapper,
  BPInnerContentWrapper,
  BPContent,
} from './styled'
interface BlogPostListItemProps {
  blogPost: BlogPost
}

const MacHeader = () => (
  <BPMacHeader>
    <Circle />
    <Circle />
    <Circle />
  </BPMacHeader>
)

const BlogPostListItem = ({ blogPost }: BlogPostListItemProps) => {
  const imageSrc = 'https://' + blogPost.image.file.url.slice(2)

  return (
    <BlogPostListItemWrapper>
      <Link style={{ textDecoration: 'none' }} to={`/${blogPost.slug}`}>
        <MacHeader />
        <BPContent>
          <BPHeader>
            <BPTitle>{blogPost.title}</BPTitle>
          </BPHeader>
          <BPBody>
            <BPImage src={imageSrc} />
            <BPContentWrapper>
              <p>{blogPost.description}</p>
              <BPInnerContentWrapper>
                <BPTimestamp>
                  <i className="fas fa-calendar-edit">&nbsp;</i>
                  {printRelativeDate(blogPost.date)}
                </BPTimestamp>
                <Link to={`/${blogPost.slug}`}>Read More</Link>
              </BPInnerContentWrapper>
            </BPContentWrapper>
          </BPBody>
        </BPContent>
      </Link>
    </BlogPostListItemWrapper>
  )
}

export default BlogPostListItem
