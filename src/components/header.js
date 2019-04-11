import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 500px) {
    padding-top: 100px;
  }
  padding: 30px 20px 0;
  background: transparent;
`
const H1 = styled.h1`
  font-weight: 300;
  color: #c59cda;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  font-size: 24px;
  @media (min-width: 500px) {
    font-size: 40px;
  }
`

const Subtitle = styled.h3`
  font-style: italic;
  font-weight: 300;
  text-align: center;
`

const Spacer = styled.div`
  width: 60px;
  height: 3px;
  background-color: #d419ec;
  margin: 10px auto 30px;
`

const Header = ({ siteTitle, siteDescription }) => (
  <HeaderWrapper>
    <H1>{siteTitle}</H1>
    <Spacer />
    <Subtitle>{siteDescription}</Subtitle>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
