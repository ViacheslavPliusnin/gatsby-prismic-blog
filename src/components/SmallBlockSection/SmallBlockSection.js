import React from "react"
import Article from "../Article/Article"
import styled from 'styled-components';

const SmallSection = styled.div`
    display: flex;
    width: 1200px;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 50px;
`

const SmallBlockSection = (props) => {
  return (
    <SmallSection>
      {props.blogs.map(blog => {
        return <Article slug={blog.slugs[0]} data={blog.data} key={blog.id} width="380px" fontSize="18px"/>
      })}
    </SmallSection>
  )
}

export default SmallBlockSection