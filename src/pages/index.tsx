import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import { transformAllContentfulBlogPost } from '../helpers/graphql'
import BlogPostList from '../components/BlogPostList'

const IndexPage = () => {
  const allBlogPosts = transformAllContentfulBlogPost(
    useStaticQuery(graphql`
      query {
        allContentfulBlogPost {
          edges {
            node {
              id
              date
              title
              author
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
    `)
  )

  return (
    <Layout>
      <BlogPostList posts={allBlogPosts} />
    </Layout>
  )
}

export default IndexPage
