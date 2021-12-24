import React from 'react'
import styled, { css, StyledProps } from 'styled-components'
import DopeMoji, { DopeMojiSize } from '../components/DopeMoji'
import { desktopOnly, tabletOnly } from '../helpers/styled'
import { Link } from 'gatsby'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`

const HeaderText = styled.h1`
  font-family: 'Fredoka One', sans-serif;
  font-size: 3.5rem;
`

const Nav = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
`

function renderDarkModeStyles(props: StyledProps<{ isActive: boolean }>) {
  if (props.isActive) {
    return css`
      a,
      a:visited {
        color: #fff;
      }
      background-color: rgb(206, 103, 103);
    `
  }
  return css`
    a,
    a:visited {
      color: #000;
    }
  `
}

const NavItem = styled.div<{ isActive: boolean }>`
  ${renderDarkModeStyles}

  a {
    text-decoration: none;
    font-size: 1rem;
    padding: 0.2rem 1rem;
  }

  border-radius: 5px;
  border: 2px solid #000;
  box-shadow: 0px 2px 0px #000;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    box-shadow: 0px 4px 0px #000;
    transform: translateY(-2px);
    cursor: pointer;
  }

  ${desktopOnly`
    width: initial;
    height: initial;
    padding: 0 1rem;
  `}
`

const DesktopEmoji = styled.span`
  margin-top: 3.5rem;
  margin-bottom: 1.2rem;
`

function getPathName() {
  return typeof window !== `undefined` && window.location && window.location.pathname
}

function isPortfolioPage() {
  return getPathName() === '/portfolio'
}

function isBlogPage() {
  return getPathName() !== '/portfolio'
}

export default function SiteHeader() {
  return (
    <HeaderWrapper>
      <span style={{ fontSize: '7rem' }}>🤪</span>
      <HeaderText>Quicksand</HeaderText>
      <Nav>
        <NavItem isActive={isBlogPage()}>
          <Link to="/">Blog</Link>
        </NavItem>
        <NavItem isActive={isPortfolioPage()}>
          <Link to="/portfolio">Portfolio</Link>
        </NavItem>
      </Nav>
    </HeaderWrapper>
  )
}
