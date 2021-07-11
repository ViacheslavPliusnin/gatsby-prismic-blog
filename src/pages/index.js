import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';
import "../style.css";

import SmallBlockSection from "../components/SmallBlockSection/SmallBlockSection"
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo";
import CarouselSection from "../components/CarouselSection/CarouselSection";
import DuoSection from "../components/DuoSection/DuoSection";
import SingleSection from "../components/SingleSection/SingleSection";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Homepage = (props) => {
  return (
    <Layout>
      <Seo title="All posts" />
      <Container>
        <CarouselSection blogs={props.data.carousel.nodes} />
        <DuoSection blogs={props.data.duo.nodes} />
        <SingleSection blogs={props.data.single.nodes} />
        <SmallBlockSection blogs={props.data.smallBlocks.nodes} />
        <DuoSection blogs={props.data.duo.nodes} />
      </Container>
    </Layout>
  )
}

export default Homepage

export const IndexQuery = graphql`
  query IndexQuery {
    smallBlocks: allPrismicArticles(limit: 6, sort: {fields: data___date, order: DESC}) {
      nodes {
        id
        slugs
        uid
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
      }
    }
    carousel: allPrismicArticles(sort: {order: ASC, fields: data___date}) {
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
          main_image {
            alt
            url
          }
          heading {
            text
          }
          subheading {
            text
          }
        }
        id
        uid
      }
    }
    duo: allPrismicArticles(limit: 2, sort: {fields: data___date, order: ASC}) {
      nodes {
        id
        slugs
        uid
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
      }
    }
    single: allPrismicArticles(limit: 1, sort: {order: DESC, fields: id}) {
      nodes {
        id
        slugs
        uid
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
      }
    }
  }
`;