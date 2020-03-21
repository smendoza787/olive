import { graphql, Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { printDate } from '../helpers/date'
import { BPTimestamp, BPRichContent } from '../components/BlogPostList/styled'
import Layout from '../components/layout'
import { transformContentfulBlogPost } from '../helpers/graphql'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { desktopOnly } from '../helpers/styled'

const BackLinkWrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 1.25rem;
    text-decoration: none;
  }
`

const BlogPostTitle = styled.h1`
  font-family: 'Fredoka One', serif;
  font-size: 1.75rem;
  background-color: rgba(255, 255, 255, 0.5);
`

const BlogPostHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${desktopOnly`
    margin-bottom: 1.5rem;
    justify-content: space-between;
    align-items: center;
  `}
`

const BlogPostTitleDateWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`

const BlogPostImg = styled.div<{ src: string }>`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-image: url(${({ src }) => src});
  margin-bottom: 1rem;
`

const BlogPostTemplate = ({ data }: { data: any }) => {
  const blogPost = transformContentfulBlogPost(data)
  const richContent = JSON.parse(blogPost.content.content)
  const siteTitle = data.site.siteMetadata.title
  const imageSrc = 'https://' + blogPost.image.file.url.slice(2)

  return (
    <Layout>
      <Helmet title={`${blogPost.title} | ${siteTitle}`} />
      <BlogPostHeader>
        <BlogPostTitleDateWrapper>
          <BlogPostTitle>{blogPost.title}</BlogPostTitle>
          <BPTimestamp>
            <i className="fas fa-calendar-edit">&nbsp;</i>
            {printDate(blogPost.date)}
          </BPTimestamp>
        </BlogPostTitleDateWrapper>
        <BlogPostImg src={imageSrc} />
      </BlogPostHeader>
      <BPRichContent dangerouslySetInnerHTML={{ __html: documentToHtmlString(richContent) }} />
      <BackLinkWrapper>
        <Link to="/">
          <span style={{ fontSize: '1.5rem' }}>👈</span>&nbsp;&nbsp;Back
        </Link>
      </BackLinkWrapper>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      content {
        content
      }
      date
      description
      image {
        file {
          url
        }
      }
    }
  }
`
