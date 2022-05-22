import { StyledLoader, LoaderContainer } from "./Loader.styles";
import { Title } from "../../AppStyles";

export const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <StyledLoader />
      <Title size="s" type="secondary">
        Loading...
      </Title>
    </LoaderContainer>
  );
};
