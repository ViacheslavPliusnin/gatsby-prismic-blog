import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import flaticon from '../images/icon.png'

const Seo = ({ title }) => {
    const { site } = useStaticQuery(query)

    const {
        defaultTitle,
        titleTemplate,
      } = site.siteMetadata

      const seo = {
        title: title || defaultTitle,
        icon: flaticon,
      }

    return(
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
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
      }
    }
  }
`