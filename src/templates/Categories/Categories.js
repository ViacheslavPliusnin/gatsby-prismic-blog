import React from "react";
import { graphql } from "gatsby"

import Layout from "../../components/Layout/Layout";
import Seo from "../../components/Seo";
import { TemplatesContainer, TemplatesSection } from "../../styles/pages.style";
import Article from "../../components/Article/Article";

const CategoriesTemplate = ({ pageContext, data }) => {
    const blogData = data.allPrismicArticles.nodes;
    return(
        <Layout>
            <Seo title={pageContext.category} /> 
            <TemplatesContainer color={blogData[0].data.category_color}>
                <h2>Posts in category: <span>{pageContext.category}</span></h2>
                <TemplatesSection>
                    {blogData.map(blog => {
                        return <Article slug={blog.slugs[0]} data={blog.data} key={blog.id} width="575px" fontSize="24px"/>
                    })}
                </TemplatesSection>
            </TemplatesContainer>
        </Layout>
    )
};
export default CategoriesTemplate;

export const pageQuery = graphql`
query BlogPostByCategory($category: String!) {
    allPrismicArticles(filter: {data: {category: {elemMatch: {text: {eq: $category}}}}}) {
      nodes {
        data {
          author {
            text
          }
          category {
            text
          }
          category_color
          date
          description {
            text
          }
          heading {
            text
          }
          main_image {
            url
            alt
          }
          subheading {
            text
          }
        }
        id
        slugs
        uid
      }
    }
  }
`;