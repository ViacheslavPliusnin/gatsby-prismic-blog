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
export const TemplatesContainer = styled.div`
    font-family: 'PT Sans', sans-serif;
    width: 100%;
    min-height: 500px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > h2 {
        font-size: 36px;
        text-shadow: 1px 1px 0 gray;
    }
    & > h2 span{
      color: ${(props) => props.color};
    }
`;
export const TemplatesSection = styled.div`
    display: flex;
    width: 1200px;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: 50px;
`