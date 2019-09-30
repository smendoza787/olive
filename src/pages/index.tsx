import { graphql } from 'gatsby'
import React, { Fragment } from 'react'
import Typist from 'react-typist'
import styled from 'styled-components'

import BlogPostList from '../components/BlogPostList'
import DopeMoji from '../components/DopeMoji'
import Layout from '../components/layout'
import { transformAllContentfulBlogPost } from '../helpers/graphql'
import { desktopOnly, tabletOnly } from '../helpers/styled'

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
  width: 100%;
  height: 4rem;
  max-width: 35rem;
  font-family: 'Roboto Slab';
  text-align: justify;
  padding-bottom: 2rem;
  margin-bottom: 0;
  border-bottom: 1px solid lightgray;

  .Typist {
    display: inline;
  }

  ${tabletOnly`
    border-bottom: none;
  `}
`

const PillList = styled.div`
  display: none;

  ${tabletOnly`
    display: flex;
    flex-direction: column;
  `}

  ${desktopOnly`
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

  ${tabletOnly`
    display: inline;
  `}
`

const MobileEmoji = styled.span`
  display: flex;
  font-size: 4rem;
  margin-top: 2rem;
  justify-content: center;

  ${tabletOnly`
    display: none;
  `}
`

const IndexPage = ({ data }: { data: any }) => {
  const allBlogPosts = transformAllContentfulBlogPost(data)
  const quotes = [
    `Hello, my name is Sergio and I'm a Full Stack web developer based in Denver, CO 🙂`,
    `Trying to stay afloat in the world of full stack development`,
    `To be honest I haven't put much thought into what I'm going to put in here...`,
    `...And now I'm realizing that I can't put this thing on a loop`,
    `It's fine, I doubt anyone will actually read this far...`,
    `Having 🛩 way too 🚀 much fun with 🎱 this emoji support`,
    `Let's play the waiting game...`,
    `Wanna know the rules?`
  ]

  return (
    <Layout>
      <HeaderWrapper>
        <HeaderText>
          Quicksand{' '}
          <MobileEmoji>
            <DopeMoji size="lg" />
          </MobileEmoji>
          <DesktopEmoji>
            <DopeMoji size="lg" />
          </DesktopEmoji>
        </HeaderText>
        <SubheaderText>
          <Typist>
            {quotes.map((quote, i) => (
              <span key={i}>
                {quote}
                <Typist.Backspace count={quote.length} delay={1500} />
              </span>
            ))}
          </Typist>
        </SubheaderText>
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
