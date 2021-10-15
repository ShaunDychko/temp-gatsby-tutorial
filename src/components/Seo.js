import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet>
      <title>
        {title} | {site.siteMetadata.title}
      </title>
      <meta name="description" content={metaDescription} />
      <html lang="en" />
    </Helmet>
  )
}

export default Seo
