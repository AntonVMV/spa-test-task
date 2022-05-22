import styled from "styled-components";
import { CurrentArticle } from "./CurrentArticle";

export const StyledCurrentArticle = styled(CurrentArticle)`
  display: flex;
  flex-direction: column;
  gap: 50px;
  img {
    max-height: 592px;
    object-fit: cover;
  }
`;

export const ArticleContent = styled.div`
  max-width: 652px;
  margin: 0 auto;
  display: grid;
  row-gap: 5px;
  justify-items: center;
  & > h2 {
    text-align: center;
  }
  div {
    margin-top: 45px;
    display: grid;
    gap: 5px;
  }
`;
