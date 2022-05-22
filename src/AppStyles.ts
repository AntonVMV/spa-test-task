import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

interface TextProps {
  type: "primary" | "secondary";
}

export const Text = styled.p<TextProps>`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  ${(props) => {
    switch (props.type) {
      case "primary":
        return css`
          color: #000;
          line-height: 24px;
        `;
      case "secondary": {
        return css`
          color: rgba(28, 28, 28, 0.5);
          line-height: 22px;
        `;
      }
    }
  }}

  @media screen and (max-width: 769px) {
    font-size: 14px;
  }
`;

export const Subtitle = styled.h4`
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  color: rgba(28, 28, 28, 0.5);
  line-height: 20px;
  font-weight: 400;
`;

interface TitleProps {
  type: "primary" | "secondary";
  size: "s" | "m" | "l";
}

export const Title = styled.h2<TitleProps>`
  color: #000;
  ${(props) => {
    switch (props.size) {
      case "s":
        return css`
          font-size: 33px;
          line-height: 41px;
        `;
      case "m":
        return css`
          font-size: 42px;
          line-height: 52px;
        `;
      case "l":
        return css`
          font-size: 42px;
          line-height: 57px;
        `;
    }
  }};
  font-family: ${(props) =>
    props.type === "primary"
      ? `'Libre Baskerville', serif`
      : `'Open Sans', sans-serif`};

  @media screen and (max-width: 769px) {
    ${(props) => {
      switch (props.size) {
        case "s":
          return css`
            font-size: 24px;
            line-height: 30px;
          `;
        case "m":
          return css`
            font-size: 36px;
            line-height: 30px;
          `;
        case "l":
          return css`
            font-size: 36px;
            line-height: 49px;
          `;
      }
    }};
  }
`;

export const StyledMain = styled.main`
  margin-top: 45px;
  height: 100%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledHeader = styled.header`
  max-width: 1316px;
  margin: 0 auto;
  @media screen and (max-width: 769px) {
    padding: 0 25px;
  }
`;

export const StyledSection = styled.section`
  max-width: 1316px;
  margin: 0 auto;
  @media screen and (max-width: 1360px) {
    padding: 0 25px;
  }
`;

export const StyledLogo = styled(Link)`
  align-self: center;
`;
