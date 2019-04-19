/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const GlobalStyles = createGlobalStyle`
html{
  height: 100vh;
  background-attachment: fixed;
  background-image: linear-gradient(
    to left bottom,
    #5b2d8e,
    #712fa3,
    #8a2fb6,
    #a42cc9,
    #c024db
  );
}
`

const MainLayout = styled.div`
  color: #c59cda;
  font-weight: 300;
  @media (min-width: 768px) {
    height: 100vh;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <MainLayout>
        <GlobalStyles />
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteDescription={data.site.siteMetadata.description}
        />

        <main>{children}</main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </MainLayout>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
