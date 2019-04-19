import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import twitter from "../images/twitter.svg"

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px;
  background: transparent;
  text-align: center;
`

const Footer = ({ siteTitle }) => (
  <FooterWrapper>
    copyright ©{new Date().getFullYear()} {siteTitle}, follow me on{" "}
    <a
      style={{ marginLeft: 10, color: "pink" }}
      href="https://twitter.com/alexadark"
      target="_blank"
    >
      twitter
    </a>
  </FooterWrapper>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
