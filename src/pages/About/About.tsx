import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import { fetchAbout } from "../../store/slices/aboutSlice";
import { Title, Text } from "../../AppStyles";
import { Loader } from "../../components/Loader/Loader";
import { StyledSection } from "../../AppStyles";

interface AboutProps {
  className?: string;
}

export const About: React.FC<AboutProps> = ({ className }) => {
  const { data, loading } = useAppSelector((state) => state.aboutSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAbout());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {data && (
        <StyledSection className={className}>
          <Title size="m" type="primary">
            {data.title}
          </Title>
          <Text
            type="primary"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </StyledSection>
      )}
    </>
  );
};
