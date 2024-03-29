import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import SiteHeader from './SiteHeader'
import SiteBanner from './SiteBanner'

import './layout.css'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[{ rel: 'icon', type: 'image/svg+xml', href: 'favicon.ico?v=2' }]}
        >
          <script src="https://kit.fontawesome.com/e2d827be2b.js" />
          <html lang="en" />
        </Helmet>
        <SiteBanner />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 5rem',
            paddingTop: 0,
          }}
        >
          <SiteHeader />
          {children}
        </div>
      </>
    )}
  />
)

export default Layout
