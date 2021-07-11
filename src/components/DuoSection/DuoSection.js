import React from "react"

import Article from "../Article/Article"
import { DuoContainer, Section } from "./DuoSection.style"

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