import React from "react";
import { graphql } from "gatsby"

import Layout from "../../components/Layout/Layout";
import Seo from "../../components/Seo";
import Article from "../../components/Article/Article";
import { TemplatesContainer, TemplatesSection } from "../../styles/pages.style";

const AuthorsTemplate = ({ pageContext, data }) => {
    const blogData = data.allPrismicArticles.nodes;
    return(
        <Layout>
            <Seo title={`Author: ${pageContext.author}`} /> 
            <TemplatesContainer color="#1a54e7">
                <h2>Posts by: <span>{pageContext.author}</span></h2>
                <TemplatesSection>
                    {blogData.map(blog => {
                        return <Article slug={blog.slugs[0]} data={blog.data} key={blog.id} width="575px" fontSize="24px"/>
                    })}
                </TemplatesSection>
            </TemplatesContainer>
        </Layout>
    )
};
export default AuthorsTemplate;

export const pageQuery = graphql`
query BlogPostByAuthor($author: String!) {
    allPrismicArticles(filter: {data: {author: {elemMatch: {text: {eq: $author}}}}}) {
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