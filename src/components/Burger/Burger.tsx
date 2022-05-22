import { BurgerContaier, BurgerLine } from "./Burger.style";

interface BurgerProps {
  isActive: boolean;
  onChange(): void;
}

export const Burger: React.FC<BurgerProps> = ({ isActive, onChange }) => {
  return (
    <BurgerContaier onClick={onChange} isActive={isActive}>
      <BurgerLine />
      <BurgerLine />
      <BurgerLine />
    </BurgerContaier>
  );
};
