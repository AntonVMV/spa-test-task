import styled from "styled-components";
import { Title } from "../../AppStyles";
import { EditorPicks } from "./EditorPicks";

export const StyledTitle = styled(Title)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  &::after {
    content: "";
    display: block;
    width: 190px;
    height: 5px;
    background-color: #000;
    margin-top: 10px;
  }
`;

export const ArticlesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 50px;
  li {
    display: grid;
    gap: 55px;
    grid-template-columns: auto 1fr;
    img {
      width: 370px;
      @media screen and (max-width: 769px) {
        width: 265px;
      }
      @media screen and (max-width: 680px) {
        width: 100%;
      }
    }
    @media screen and (max-width: 680px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
`;

export const StyledEditorPicks = styled(EditorPicks)`
  max-width: 856px;
  margin: 0 auto;
`;
