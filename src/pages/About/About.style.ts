import styled from "styled-components";
import { About } from "./About";

export const StyledAbout = styled(About)`
  max-width: 856px;
  margin: 0 auto;
  padding-bottom: 40px;

  img {
    width: 370px;
    float: right;
    margin: 38px 0 38px 38px;
    @media screen and (max-width: 600px) {
      display: none;
      /* display: flex; */
    }
  }
  h2 {
    text-align: center;
    margin: 150px 0 30px;
    @media screen and (max-width: 769px) {
      margin: 50px 0 20px;
    }
  }
`;
