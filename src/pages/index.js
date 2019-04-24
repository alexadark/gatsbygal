import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import SubscriptionForm from "../components/subscriptionForm"
import { H1, H2 } from "../styles"

const Content = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
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
      <div className="intro" style={{ marginBottom: 30 }}>
        Hello, I am Alexandra Spalato, a WordPress developer who fell in love
        with JavaScript and most recently with Gatsby! I am working on a book to
        help spread some Gatsby Love 💜! you can sign up below for updates
      </div>
      <SubscriptionForm />
      <div className="firstChaper" style={{ marginTop: 30, textAlign: "left" }}>
        <H2 style={{ textAlign: "center" }}>Read the first chapter!</H2>
        <div className="firstChapter-content" />
        <H1>What is Gatsby</H1>
        <p>
          Gatsby is a powerful React-based framework that makes it easy to
          create super fast websites and apps. It combines the goodness of
          React, GraphQL, webpack, and other front-end tools into one go-to tool
          that delivers a great developer experience. While it is a ‘static site
          generator’, it is far more than what we’d expect from the old term. It
          is more of a robust front-end framework.
        </p>
        <p>
          Wandering what a static site generator really is? A static site is a
          site that contains static content only. In many cases, static sites
          are preferred to dynamic websites(which additionally require
          client-server interaction) due to challenges like slow load speeds,
          hosting costs, security flaws and many more. Since there’s no need for
          a server, these risks are non-existent. Static site generators are
          tools that offer the ability to develop static sites in an efficient
          and effective manner. Gatsby is one of the static site generators
          taking center stage. And like I mentioned above, it is far more than
          what we’d expect from a ‘static site generator’. Due to its data
          layer, Gatsby can dynamically create static pages based on our data,
          which you’ll learn about further into this course.
        </p>
        <p>
          Gatsby uses a robust pre-configuration which includes things like
          blazing fast page loads, code splitting, intelligent image loading,
          asset optimization, data prefetching, server-side rendering, service
          workers and many more, all out of the box. Nobody believes the speed
          until they’ve tried it out themselves.
        </p>
        <H2>Advantage #1. Collect data from anywhere</H2>
        <p>
          Gatsby is powered by GraphQL which means that it has the ability to
          parse data from wherever we want: any CMS of our liking, APIs,
          Markdown, CSV, JSON, just about anywhere! It creates an internal
          GraphQL server with all of this data at build time. This means that
          Gatsby’s data layer offers us the ability to pull data from any source
          directly into our components in any shape and form we like.
        </p>
        <H2>Advantage #2. Rich ecosystem</H2>
        Although Gatsby has not been around for a very long time, it already has
        great documentation and a variety of starters to help us get started
        quickly. Gatsby also boasts an extensive plugin system that makes it
        even more powerful. If there’s something we want to accomplish with
        Gatsby, there’s possibly a plugin for it already. If not, there’s enough
        documentation to help us get started building one.
        <H2>Advantage #3. Performance focused</H2>
        <p>
          Performance has been a major pain factor that has been plaguing
          websites for a long time now. It’s a blessing to have a tool that
          optimizes our site and enforces best practices, out of the box. I
          wouldn’t have believed someone a few years ago if they told me that a
          tool like that existed, but it’s a reality now. Gatsby does all of
          that by default. Gatsby creates static HTML files for every page that
          results in fast initial load times which greatly impacts SEO. It also
          prefetches content for the related pages in the background so the load
          time when a user clicks a link is instantaneous. The site is fast even
          on slow internet speeds, which poses a huge advantage for you. Gatsby
          can even provide offline support by just adding a single plugin. That
          transforms our site into a Progressive Web App.
        </p>
        <p>
          This focus on performance leads to better SEO(Search Engine
          Optimization). SEO is very important in terms of getting higher
          organic search rankings and more site traffic. These factors translate
          to more leads and revenue. Gatsby’s built-in performance optimization
          leads to blazing fast speeds that greatly bumps your site up in search
          rankings. Google rewards faster sites with better rankings since
          January 2018.
        </p>
        <p>
          High bounce rates are directly related to the site’s speed. The longer
          it takes a page to load, the more leads and revenue we’re losing.
          According to research, we have about 3 seconds to get a visitor’s
          attention and if our site takes longer than that, our chances are
          slim. With Gatsby load speeds being near-instantaneous this isn’t a
          problem and poses a refreshing user experience for our visitors
          compared to the slow load speeds around the internet they are probably
          used to. This means higher conversion rates that further leads to more
          revenue.
        </p>
        <H2>Advantage #4. Great developer experience</H2>
        <p>
          This is a subjective point, but the experience of working with Gatsby
          is fun and exciting. The plugin system offers the ability to easily
          extend Gatsby in various ways with just a simple npm install command
          and a few lines in the configuration file. Built in live-reload lets
          us see our changes reflect immediately when working locally. The
          documentation for Gatsby is solid and always improving. The core team
          members and the community are very helpful. Overall, it’s a pleasant
          experience.
        </p>
        <H2>Who Is Using Gatsby?</H2>
        <p>
          It can be an insightful and confidence-building exercise to look into
          some companies that are already using Gatsby on their projects. Here’s
          a small list of just a few of the many major companies using Gatsby:
        </p>
        <ul>
          <li>ReactJS</li>
          <li>Airbnb</li>
          <li>SendGrid</li>
          <li>Figma</li>
          <li>Nike</li>
          <li>Flamingo by Harry’s</li>
          <li>Hopper</li>
          <li>GM Capital One</li>
        </ul>
        <H2>Let’s Get Started</H2>
        <p>
          Throughout the introduction, we have had a high-level look at the main
          points that makes Gatsby the tool of choice for building fast websites
          and apps. We can also see the advantages now and why it is the future
          of the modern web.
        </p>
        <p>
          Through the rest of the book, we will look into how Gatsby works and
          how to build sites with it. We are going to follow a more practical
          approach and learn as we build a project that has been planned for
          this book. At the end of this book, you will have a functional
          photography blog which you can choose to use for any other kinds of
          sites. You will leave with both theoretical and practical knowledge to
          confidently build sites of any kind using Gatsby.
        </p>
      </div>

      <SubscriptionForm />
    </Content>
  </Layout>
)

export default IndexPage
