import React from 'react'
import { graphql } from 'gatsby'

import BlogPostList from '../components/BlogPostList'
import Layout from '../components/layout'
import { transformAllContentfulBlogPost } from '../helpers/graphql'

const IndexPage = ({ data }: { data: any }) => {
  const allBlogPosts = transformAllContentfulBlogPost(data)

  return (
    <Layout>
      <BlogPostList posts={allBlogPosts} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          id
          date
          title
          slug
          description
          image {
            file {
              url
            }
          }
          content {
            content
          }
        }
      }
    }
  }
`
