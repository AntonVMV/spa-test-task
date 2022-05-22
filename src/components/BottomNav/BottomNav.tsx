import { StyledBottomLink } from "./BottomNav.style";

interface BottomNavProps {
  className?: string;
  prev: string | null;
  next: string | null;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  className,
  prev,
  next,
}) => {
  return (
    <div className={className}>
      <StyledBottomLink arrowSide="left" link={prev} />
      <StyledBottomLink arrowSide="right" link={next} />
    </div>
  );
};
