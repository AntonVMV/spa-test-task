import styled from "styled-components";
import Banner from "./Banner";

export const StyledBanner = styled(Banner)`
  background-image: url(${(props) => props.article?.image});
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: flex-start;
  padding: ${(props) =>
    props.articlePosition === "left" ? "0 45px 60px" : "54px 78px"};
  justify-content: ${(props) =>
    props.articlePosition === "left" ? "flex-start" : "flex-end"};
  & > div {
    padding: 76px 39px 96px;
    background-color: #fff;
    display: inline-block;

    @media screen and (max-width: 769px) {
      padding: 22px;
    }
    @media screen and (max-width: 680px) {
      padding: 0;
    }
  }
  @media screen and (max-width: 680px) {
    background-image: none;
    padding: 0;
  }
`;
