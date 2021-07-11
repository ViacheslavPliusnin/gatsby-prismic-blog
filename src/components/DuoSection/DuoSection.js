import React from "react"
import Article from "../Article/Article"
import styled from 'styled-components';

const DuoContainer = styled.div`
  width: 100%;
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
`;
const Section = styled.div`
    display: flex;
    width: 1200px;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 50px;
`

const DuoSection = (props) => {
  return (
    <DuoContainer>
      <Section>
        {props.blogs.map(blog => {
          return <Article slug={blog.slugs[0]} data={blog.data} key={blog.id} width="575px" fontSize="24px"/>
        })}
      </Section>
    </DuoContainer>
  )
}

export default DuoSection