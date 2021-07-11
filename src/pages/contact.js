import React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo";
import { PageContainer } from "../styles/pages.style";

const Contact = () => {
  return (
      <Layout>
        <Seo title="Contact" /> 
        <PageContainer>
            <h2>Hi there! This is Contact page</h2>
        </PageContainer>
      </Layout>
  )
}

export default Contact