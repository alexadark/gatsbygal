import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { H1 } from "../styles"

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 500px) {
    padding-top: 50px;
  }
  padding: 30px 20px 0;
  background: transparent;
`

const Subtitle = styled.h3`
  font-style: italic;
  font-weight: 300;
  text-align: center;
  line-height: 1.5;
  @media (min-width: 500px) {
    font-size: 24px;
  }
  font-size: 20px;
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
