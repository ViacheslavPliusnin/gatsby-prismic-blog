import { Link } from "gatsby"
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'PT Sans', sans-serif;
    font-size: 18px;
    padding-top: 25px;
    & > div {
      width: 1200px;
    }
`;
export const ImageContainer = styled.div`
    height: ${(props) => props.height};
    position: relative;  
`;
export const HeadingContainer = styled.div`
    width: 600px;
    display: flex;
    gap: 5px;
    flex-direction: column;
    text-align: center;
    font-family: 'PT Serif', serif;
    color: white;
    position: absolute;
    top: 50%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-shadow: 1px 1px 0 black;
    & > h2 {
      font-size: 48px;
    }
`;
export const MainImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
export const Category = styled.h5`
    position: absolute;
    bottom: 25px;
    font-weight: bold;
    padding: 9px 19px;
    color: white;
`;
export const Date = styled.p`
    position: absolute;
    right: 0;
    bottom: 25px;
    color: #b0b0b0;
    padding: 9px 19px;
    background-color: rgba(0, 0, 0, 0.5);
`;
export const AuthorLink = styled(Link)`
    text-decoration: underline;
    color: #1a54e7;
`;
export const TextContainer = styled.div`
    margin: 25px 0;
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    background-color: #f6f6f6;
`;