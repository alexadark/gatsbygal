/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const MainLayout = styled.div`
  height: 100vh;
  color: #c59cda;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(
    to left bottom,
    #5b2d8e,
    #712fa3,
    #8a2fb6,
    #a42cc9,
    #c024db
  );
`

const Layout = ({ children }) => (
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
      <MainLayout>
        <Header siteTitle={data.site.siteMetadata.title} />

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
