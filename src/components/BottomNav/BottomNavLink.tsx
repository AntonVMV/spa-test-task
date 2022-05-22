import { Link } from "react-router-dom";

interface BottomNavLinkProps {
  arrowSide: "left" | "right";
  className?: string;
  link: string | null;
}

export const BottomNavLink: React.FC<BottomNavLinkProps> = ({
  className,
  link,
}) => {
  return (
    <Link to={link ? link : "#"} className={className}>
      {"<"}
    </Link>
  );
};
