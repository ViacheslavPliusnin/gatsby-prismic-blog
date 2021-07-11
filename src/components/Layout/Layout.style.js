import styled from "styled-components";
import { Link } from "gatsby";
import Plane from '../../images/newsletter_background.png'

export const HeaderConainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background: rgb(26,84,231);
    background: linear-gradient(90deg, rgba(26,84,231,1) 0%, rgba(26,84,231,1) 50%, rgba(255,255,255,1) 75%, rgba(255,255,255,1) 100%); 
`;
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: white;
    height: 70px;
    width: 1200px;
    display: flex;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
`;
export const PagesContainer = styled.div`
    height: 100%;
    background-color: white;
    color: #b1b1b1;
    display: flex;
    align-items: center;
    background-color: #1a54e7;
`;
export const MainLink = styled(Link)`
    padding-right: 35px;
    text-decoration: none;
    color: white;
    font-size: 24px;
    & > span {
        font-weight: bold;
    }
`;
export const SearchButton = styled.button`
    height: 100%;
    width: ${(props) => props.width};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.backgroundColor};
    border: none;
    padding: 0;
`;
export const PagesLinks = styled.div`
    background-color: white;
    height: 100%;
    width: 325px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    & > a {
        color: #b1b1b1;
        font-size: 18px;
        text-decoration: none;
    }
`;
export const CategoriesContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 35px;
    align-items: center;
    background-color: white;
    & > a {
        color: #1a54e7;
        font-size: 18px;
        text-decoration: none;
    }
`;
export const Newslatter = styled.div`
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${Plane});
    background-color: #1a54e7;
    background-repeat: space;
    font-family: 'PT Serif', serif;
    color: white;
    & > h2 {
        font-size: 48px;
    }
    & > h4 {
        font-size: 24px;
        margin-bottom: 40px;
    }
    & > form {
        margin-left: 135px;
        font-family: 'PT Sans', sans-serif;
    }
`;
export const TextInput = styled.input`
    background-color: #2c6cff;
    height: 50px;
    width: 400px;
    border-radius: 25px;
    border: none;
    color: white;
    padding-left: 25px;
    padding-right: 150px;
    font-size: 16px;
`;
export const SubmitInput = styled.input`
    background-color: white;
    height: 50px;
    width: 135px;
    border-radius: 25px;
    border: none;
    color: #1a54e7;
    position: relative;
    right: 135px;
    font-size: 18px;
`;
export const Footer = styled.footer`
    font-family: 'PT Sans', sans-serif;
    color: #b1b1b1;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
    & > p a {
        text-decoration: none;
        color: #b1b1b1;
        font-weight: bold;
    }
`;