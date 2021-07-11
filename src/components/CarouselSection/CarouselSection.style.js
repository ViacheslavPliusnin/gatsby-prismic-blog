import styled from 'styled-components';

export const Carousel = styled.div`
    font-family: 'PT Sans', sans-serif;
    font-size: 18px;
    position: relative;
    width: 100%;
    & .slide {
        opacity: 0;
        transition-duration: 0.5s ease;
    }
    & .slide.active {
        opacity: 1;
        transition-duration: 0.5s;
    }
`;
export const Button = styled.button`
    width: 55px;
    height: 55px;
    position: absolute;
    top: 50%;
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    background-color: white;
    border: none;
    z-index: 1;
`;