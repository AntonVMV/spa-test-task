import { NavBar } from "../components/NavBar/NavBar";
import { Outlet } from "react-router";
import { StyledMain } from "../AppStyles";
import { StyledHeader } from "../AppStyles";
import { StyledLogo } from "../AppStyles";

const links = ["Home", "Blog", "About"];

export const Layout: React.FC = () => {
  return (
    <>
      <StyledHeader>
        <NavBar links={links}>
          <StyledLogo to="/">
            <img src="./img/Logo.png" alt="Logo" />
          </StyledLogo>
        </NavBar>
      </StyledHeader>

      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
};
