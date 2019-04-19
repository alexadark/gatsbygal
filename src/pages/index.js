import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import SubscriptionForm from "../components/subscriptionForm"

const Content = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 15%;
  padding: 0 20px;
  line-height: 1.5;
  @media (min-width: 500px) {
    font-size: 22px;
  }
  font-size: 18px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `book`, `gatsby gal`]} />
    <Content>
      Hello, I am Alexandra Spalato, a WordPress developer who fell in love with
      JavaScript and most recently with Gatsby! <br />I am working on a book to
      help spread some Gatsby Love 💜!
      <br /> you can sign up below for updates
    </Content>
    <SubscriptionForm />
  </Layout>
)

export default IndexPage
