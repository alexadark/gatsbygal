import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px;
  background: transparent;
`

const Footer = ({ siteTitle }) => (
  <FooterWrapper>
    copyright ©{new Date().getFullYear()} {siteTitle}
  </FooterWrapper>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
