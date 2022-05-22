import { ArticlePreview } from "./ArticlePreview";
import styled from "styled-components";

export const StyledArticlePreview = styled(ArticlePreview)`
  background-color: #fff;
  max-width: 430px;
  display: inline-block;
  & h4 {
    margin-bottom: 5px;
  }
  & > div {
    margin: 12px 0;
  }
  h2 {
    transition: 0.2s ease;
    &:hover {
      color: #ff9800;
    }
  }
`;
