import { StyledEditorPicks } from "../../components/EditorPicks/EditorPicks.styles";
import { fetchArticles } from "../../store/slices/articlesSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import { StyledBanner } from "../../components/Banner/Banner.styles";
import { StyledSection } from "../../AppStyles";
import { useEffect } from "react";

interface BlogProps {
  className?: string;
}

export const Blog: React.FC<BlogProps> = ({ className }) => {
  const articles = useAppSelector((state) => state.articlesSlice.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <StyledSection className={className}>
      <StyledBanner articlePosition="left" article={articles[0]} />
      <StyledEditorPicks isAllAcrticles={true} articles={articles} />
    </StyledSection>
  );
};
