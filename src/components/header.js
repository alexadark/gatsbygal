import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px 20px 0;
  background: transparent;
`
const H1 = styled.h1`
  font-weight: 300;
  color: #c59cda;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const Subtitle = styled.h3`
  font-style: italic;
  font-weight: 300;
`

const Spacer = styled.div`
  width: 60px;
  height: 3px;
  background-color: #d419ec;
  margin: 10px auto 30px;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <H1>{siteTitle}</H1>
    <Spacer />
    <Subtitle>Learn how to build your first Gatsby site easely!!!</Subtitle>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
