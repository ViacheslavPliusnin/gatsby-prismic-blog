import { Link } from "gatsby";
import React from "react"
import { ImageContainer, HeadingContainer, MainImage, Category, Date } from "../../templates/BlogPost/BlogPost.style";
import styled from "styled-components";

const SingleContainer = styled.div`
    font-family: 'PT Sans', sans-serif;
    font-size: 18px;
    position: relative;
    width: 1200px;
    padding-top: 50px;
`;

const SingleSection = (props) => {

  return (
    <SingleContainer className="carousel">
      {props.blogs.map((blog, index) => {
        return <Link to={`/${blog.uid}`} key={index}>
                <ImageContainer height="400px">
                  <HeadingContainer>
                    <h2>{blog.data.heading[0].text}</h2>
                    <h3>{blog.data.subheading[0].text}</h3>
                  </HeadingContainer>
                  <MainImage src={blog.data.main_image.url} alt={blog.data.main_image.alt} />
                  <Category style={{backgroundColor: `${blog.data.category_color}`}}>{blog.data.category[0].text}</Category>
                  <Date>{blog.data.date} | <span>{blog.data.author[0].text}</span></Date>
                </ImageContainer>
              </Link>
      })}
    </SingleContainer>
  )
}

export default SingleSection;