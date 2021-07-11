import styled from "styled-components";
import { Link } from "gatsby";

export const Container = styled.div`
    width: ${(props) => props.width};
    margin-bottom: 60px;
`;
export const ImageContainer = styled.div`
    width: 100%;
    position: relative;
`;
export const Image = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
`;
export const Category = styled.h5`
    position: absolute;
    bottom: 20px;
    font-family: 'PT Sans', sans-serif;
    font-size: 18px;
    font-weight: bold;
    padding: 9px 19px;
    color: white;
`;
export const StyledLink = styled(Link)`
    text-decoration: none;
`;
export const Subheading = styled.h5`
    font-family: 'PT Serif', serif;
    font-weight: 400;
    color: black;
    font-size: ${(props) => props.fontSize};
    text-decoration: none;
    margin: 15px 0;
`;
export const Date = styled.p`
    font-family: 'PT Sans', sans-serif;
    font-size: 14px;
    color: #b0b0b0;
`;
export const AuthorLink = styled(Link)`
    text-decoration: underline;
    color: #1a54e7;
`;