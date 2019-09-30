import { graphql } from 'gatsby'
import React from 'react'

import BlogPostList from '../components/BlogPostList'
import Layout from '../components/layout'
import { transformAllContentfulBlogPost } from '../helpers/graphql'
import styled from 'styled-components'
import { desktopOnly } from '../helpers/styled'
import getDopeMoji from '../components/DopeMoji'

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
  display: none;
  ${desktopOnly`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
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

const DesktopEmoji = styled.span`
  display: none;
  margin-left: 1rem;

  ${desktopOnly`
    display: inline;
  `}
`

const MobileEmoji = styled.span`
  display: flex;
  font-size: 4rem;
  margin-top: 3rem;

  ${desktopOnly`
    display: none;
  `}
`

const IndexPage = ({ data }: { data: any }) => {
  const allBlogPosts = transformAllContentfulBlogPost(data)

  return (
    <Layout>
      <HeaderWrapper>
        <HeaderText>
          Quicksand <DesktopEmoji>{getDopeMoji()}</DesktopEmoji>
        </HeaderText>
        <SubheaderText>Just a human trying to stay afloat in the world of full stack development, based in Denver.</SubheaderText>
        <MobileEmoji>{getDopeMoji()}</MobileEmoji>
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
