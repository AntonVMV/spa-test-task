import { useState } from "react";
import { NavContainer, Navigation, StyledNavLink } from "./NavBar.styles";
import { Burger } from "../Burger/Burger";

interface NavBarProps {
  links: string[];
  children?: React.ReactNode;
}

export const NavBar: React.FC<NavBarProps> = ({ links, children }) => {
  const [isActiveSidebar, setActiveSidebar] = useState<boolean>(false);

  return (
    <NavContainer>
      {children}
      <Navigation isActive={isActiveSidebar}>
        {links.map((link, index) => {
          return (
            <li>
              <StyledNavLink
                key={index}
                to={link === "Home" ? "/" : link}
                onClick={() => setActiveSidebar(false)}
              >
                {link}
              </StyledNavLink>
            </li>
          );
        })}
      </Navigation>
      <Burger
        isActive={isActiveSidebar}
        onChange={() => setActiveSidebar(!isActiveSidebar)}
      />
    </NavContainer>
  );
};
