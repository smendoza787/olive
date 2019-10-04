import { graphql, Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { prettyPrintDate } from '../helpers/date'
import { BPTimestamp, BPRichContent } from '../components/BlogPostList/styled'
import Layout from '../components/layout'
import { transformContentfulBlogPost } from '../helpers/graphql'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import DopeMoji from '../components/DopeMoji'
import { desktopOnly } from '../helpers/styled'

const PageHeader = styled.div`
  margin: 3rem 0;
`

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
  font-family: 'Quicksand', serif;
  font-size: 2.5rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 1rem 0;
`

const BlogPostHeader = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  ${desktopOnly`
    margin-bottom: 1.5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`

const BlogPostTitleDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${desktopOnly`
    align-items: flex-start;
  `}
`

const DopeMojiNudgeWrapper = styled.div`
  margin-bottom: 0.5rem;
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
  margin-bottom: 2rem;
`

const BlogPostTemplate = ({ data }: { data: any }) => {
  const blogPost = transformContentfulBlogPost(data)
  const richContent = JSON.parse(blogPost.content.content)
  const siteTitle = data.site.siteMetadata.title
  const imageSrc = 'https://' + blogPost.image.file.url.slice(2)

  return (
    <Layout>
      <Helmet title={`${blogPost.title} | ${siteTitle}`} />
      <PageHeader>
        <BackLinkWrapper>
          <Link to="/">👈&nbsp;&nbsp;Back</Link>
        </BackLinkWrapper>
      </PageHeader>
      <BlogPostHeader>
        <BlogPostTitleDateWrapper>
          <BlogPostTitle>{blogPost.title}</BlogPostTitle>
          <BPTimestamp>
            <i className="fas fa-calendar-edit">&nbsp;</i>
            {prettyPrintDate(blogPost.date)}
          </BPTimestamp>
        </BlogPostTitleDateWrapper>
        <DopeMojiNudgeWrapper>
          <DopeMoji size="lg" />
        </DopeMojiNudgeWrapper>
      </BlogPostHeader>
      <BlogPostImg src={imageSrc} />
      <BPRichContent dangerouslySetInnerHTML={{ __html: documentToHtmlString(richContent) }} />
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
