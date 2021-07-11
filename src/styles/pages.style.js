import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 500px;
  font-family: 'PT Sans', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  & > h2{
    font-size: 48px;
    color: #1a54e7;
    text-shadow: 1px 1px 0 gray;
  }
`;