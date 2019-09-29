import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import BlogPostList from '../components/BlogPostList'
import Layout from '../components/layout'
import { transformAllContentfulBlogPost } from '../helpers/graphql'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
`

const HeaderText = styled.h1`
  font-family: 'Quicksand', sans-serif;
  font-size: 3.5rem;
`

const SubheaderText = styled.p`
  font-family: 'Roboto Slab';
  text-align: center;
`

const PillList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const PillTag = styled.a`
  text-decoration: none;
  color: #000;
  padding: 0 0.75rem;
  border-radius: 500px;
  border: 2px solid #000;
  font-size: 1rem;
  &:not(:last-child) {
    margin-right: 1rem;
  }
`

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
      <HeaderWrapper>
        <HeaderText>Quicksand</HeaderText>
        <SubheaderText>Just a codey boi trying to stay afloat in the world of technology, based in Denver.</SubheaderText>
        <PillList>
          <PillTag href="#">JavaScript</PillTag>
          <PillTag href="#">TypeScript</PillTag>
          <PillTag href="#">React</PillTag>
          <PillTag href="#">Gatsby.js</PillTag>
          <PillTag href="#">Java</PillTag>
        </PillList>
      </HeaderWrapper>
      <BlogPostList posts={allBlogPosts} />
    </Layout>
  )
}

export default IndexPage
