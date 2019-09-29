import { graphql, Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { prettyPrintDate } from '../helpers/date'
import { BPHeader, BPTimestamp, BPRichContent } from '../components/BlogPostList/styled'
import Layout from '../components/layout'
import { transformContentfulBlogPost } from '../helpers/graphql'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const PageHeader = styled.div`
  margin: 3rem 0;
`

const BackLink = styled(Link)`
  font-family: 'Roboto Slab', sans-serif;
`

const BlogPostTitle = styled.h1`
  font-family: 'Quicksand', serif;
  font-size: 3rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 3rem 0;
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
        <BackLink to="/">Back</BackLink>
      </PageHeader>
      <BlogPostImg src={imageSrc} />
      <BPHeader>
        <BlogPostTitle>{blogPost.title}</BlogPostTitle>
        <BPTimestamp>
          <i className="fas fa-calendar-edit">&nbsp;</i>
          {prettyPrintDate(blogPost.date)}
        </BPTimestamp>
      </BPHeader>
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
