import { BottomNav } from "./BottomNav";
import styled, { css } from "styled-components";
import { BottomNavLink } from "./BottomNavLink";

export const StyledBottomNav = styled(BottomNav)`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const StyledBottomLink = styled(BottomNavLink)`
  text-decoration: none;
  font-size: 130px;
  color: #fff;
  background-color: #000;
  opacity: ${(props) => (!props.link ? 0.2 : 1)};
  display: flex;
  padding: 0 38px;
  transition: 0.2s ease;
  border: 1px solid transparent;
  transform: rotate(
    ${(props) => (props.arrowSide === "right" ? "180deg" : "0")}
  );
  pointer-events: ${(props) => (!props.link ? "none" : "all")};
  ${(props) => {
    if (props.link) {
      return css`
        &:hover {
          background-color: #fff;
          color: black;
          border-color: gray;
        }
      `;
    }
  }}
  @media screen and (max-width: 769px) {
    font-size: 42px;
    padding: 0 12px;
  }
`;
