import React from 'react';
import { Container, ImageContainer, StyledLink, Image, Category, Subheading, Date, AuthorLink } from './Article.style';

const Article = (props) => {
    return (
        <Container width={props.width}>
            <StyledLink to={`/${props.slug}`}>
                <ImageContainer>
                    <Image src={props.data.main_image.url} alt={props.data.main_image.alt} />
                    <Category style={{backgroundColor: `${props.data.category_color}`}}>{props.data.category[0].text}</Category>
                </ImageContainer>
                <Subheading fontSize={props.fontSize}>{props.data.subheading[0].text}</Subheading>
            </StyledLink>
                <Date>{props.data.date} | <AuthorLink to={`/authors/${props.data.author[0].text}`}>{props.data.author[0].text}</AuthorLink></Date>
        </Container>
    );
};

export default Article;