import React from "react";
import { graphql } from "gatsby"

import Layout from "../../components/Layout/Layout";
import Seo from "../../components/Seo";
import { Container, ImageContainer, HeadingContainer, MainImage, Category, Date, AuthorLink, TextContainer} from './BlogPost.style'

const BlogPostTemplate = ({ pageContext, data }) => {
    const blogData = data.allPrismicArticles.nodes[0].data;
    return(
        <Layout>
          <Seo title={blogData.heading[0].text} /> 
            <Container>
                <ImageContainer height='400px'>
                    <HeadingContainer>
                        <h2>{blogData.heading[0].text}</h2>
                        <h3>{blogData.subheading[0].text}</h3>
                    </HeadingContainer>
                    <MainImage src={blogData.main_image.url} alt={blogData.main_image.alt} />
                    <Category style={{backgroundColor: `${blogData.category_color}`}}>{blogData.category[0].text}</Category>
                    <Date>{blogData.date} | <AuthorLink to={`/authors/${blogData.author[0].text}`}>{blogData.author[0].text}</AuthorLink></Date>
                </ImageContainer>
                <TextContainer>
                  {blogData.description.map((p, i) => {
                      return <p key={i}>{p.text}</p>
                  })}
                </TextContainer>
            </Container>
        </Layout>
    )
};
export default BlogPostTemplate;

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
    allPrismicArticles(filter: {slugs: {eq: $slug}}) {
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