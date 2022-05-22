import styled, { css } from "styled-components";

interface BurgerContaierProps {
  isActive: boolean;
}

export const BurgerContaier = styled.div<BurgerContaierProps>`
  position: relative;
  width: 50px;
  height: 30px;
  align-self: center;
  z-index: 10;
  div:first-child {
    ${(props) =>
      !props.isActive
        ? css`
            top: 0;
            transform: translate(-50%, 0) rotate(0);
          `
        : css`
            top: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
          `}
  }
  div:nth-child(2) {
    top: 50%;
    transform: translate(-50%, -50%);

    display: ${(props) => (props.isActive ? "none" : "block")};
  }
  div:last-child {
    ${(props) =>
      !props.isActive
        ? css`
            bottom: 0;
            transform: translate(-50%, 0) rotate(0);
          `
        : css`
            top: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
          `}
  }

  @media screen and (min-width: 681px) {
    display: none;
  }
`;

export const BurgerLine = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 36px;
  height: 4px;
  background-color: gray;
  transition: 0.2s ease;
  /* &:first-child {
    top: 0;
  } */
  &:nth-child(2) {
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  &:last-child {
    bottom: 0;
  }
`;
