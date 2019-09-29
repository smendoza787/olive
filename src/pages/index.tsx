import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import BlogPostList from '../components/BlogPostList'
import Layout from '../components/layout'
import { transformAllContentfulBlogPost } from '../helpers/graphql'
import styled, { css } from 'styled-components'
import { desktopOnly } from '../helpers/styled'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  ${desktopOnly`
    flex-direction: row;
  `}
`

const PillListTuple = styled.div`
  padding: 5px;
  display: flex;
  width: 100%;
  justify-content: center;
`

const PillTag = styled.a`
  text-decoration: none;
  color: #000;
  border-radius: 5px;
  border: 2px solid #000;
  font-size: 1rem;
  box-shadow: 0px 1px 0px #000;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 7.5rem;
  height: 2.25rem;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    position: relative;
    bottom: 3px;
    box-shadow: 0px 3px 0px #000;
  }

  ${desktopOnly`
    width: initial;
    height: initial;
    padding: 0 1rem;
  `}
`

const IndexPage = ({ data }: { data: any }) => {
  const allBlogPosts = transformAllContentfulBlogPost(data)

  return (
    <Layout>
      <HeaderWrapper>
        <HeaderText>Quicksand</HeaderText>
        <SubheaderText>Just a human trying to stay afloat in the world of full stack development, based in Denver.</SubheaderText>
        <PillList>
          <PillListTuple>
            <PillTag href="#">JavaScript</PillTag>
            <PillTag href="#">TypeScript</PillTag>
            <PillTag href="#">React</PillTag>
          </PillListTuple>
          <PillListTuple>
            <PillTag href="#">Gatsby.js</PillTag>
            <PillTag href="#">Java</PillTag>
            <PillTag href="#">AWS</PillTag>
          </PillListTuple>
        </PillList>
      </HeaderWrapper>
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
