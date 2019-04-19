import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SubscriptionForm from "../components/subscriptionForm"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `book`, `gatsby gal`]} />
    <div
      style={{
        textAlign: "center",
        maxWidth: 800,
        margin: " 0 auto 15%",
        padding: "0 20px",
        lineHeight: 1.5,
        // fontFamily: "lato",
        fontSize: 22,
      }}
    >
      Hello, I am Alexandra Spalato, a WordPress developer who fell in love with
      JavaScript and most recently with Gatsby! <br />I am working on a book to
      help spread some Gatsby Love 💜!
      <br /> you can sign up below for updates
    </div>
    <SubscriptionForm />
  </Layout>
)

export default IndexPage
