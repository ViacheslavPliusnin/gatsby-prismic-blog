import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import flaticon from '../images/icon.png'

const Seo = ({ title, lang, description }) => {
    const { site } = useStaticQuery(query)

    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
      } = site.siteMetadata

      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        icon: flaticon,
      }

    return(
        <Helmet htmlAttributes={{lang}} title={seo.title} titleTemplate={titleTemplate}>
          <meta name="description" content={seo.description} />
          <link rel="icon" type="image/png" href={flaticon} />
        </Helmet>
    )
};
export default Seo;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
      }
    }
  }
`