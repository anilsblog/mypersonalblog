import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Anils Blog"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `philosophy`, `books`, `entreprenuership`]}
        />
        <img style={{ margin: 0 }} src="./profile-pic.jpg" alt="Anil Nair" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to Anils Blog. You are on your home page.</p>
        <p>
          This blog is about philosophy,books read by me and my startup struggles.
          Watch out every week for a new content.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
