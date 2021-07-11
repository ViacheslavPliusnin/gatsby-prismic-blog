import React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo";
import { PageContainer } from "../styles/pages.style";

const About = () => {
  return (
      <Layout>
        <Seo title="About" /> 
        <PageContainer>
            <h2>Hi there! This is About page</h2>
        </PageContainer>
      </Layout>
  )
}

export default About