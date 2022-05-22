import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;

  @media screen and (max-width: 769px) {
    justify-content: space-between;
  }
`;

interface NavigationProps {
  isActive: boolean;
}

export const Navigation = styled.ul<NavigationProps>`
  display: flex;
  gap: 21px;
  margin-left: 50px;
  list-style: none;
  position: relative;
  li {
    display: grid;
    align-items: center;
    position: relative;
  }

  @media screen and (max-width: 680px) {
    position: fixed;
    left: 0;
    top: 0;
    margin: 0;
    width: 100%;
    padding: 50px 25px;
    background-color: #fff;
    transition: 0.3s ease;
    box-shadow: 0 1px 16px -5px rgba(0, 0, 0, 0.5);
    transform: ${(props) =>
      !props.isActive ? "translateX(20%)" : "translateX(0)"};
    opacity: ${(props) => (!props.isActive ? "0" : "1")};
    z-index: ${(props) => (!props.isActive ? "-1" : "2")};
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-family: "Libre Baskerville", sans-serif;
  font-size: 20px;
  line-height: 25px;
  text-decoration: none;
  color: #000;

  &.active {
    font-weight: 700;
  }
  ::after {
    content: "";
    display: block;
    width: 0;
    height: 5px;
    background-color: #000;
    position: absolute;
    bottom: 0;
    border-radius: 2px;
    transition: 0.3s ease;
    @media screen and (max-width: 680px) {
      display: none;
    }
  }
  &:hover {
    ::after {
      width: 100%;
    }
  }
`;
