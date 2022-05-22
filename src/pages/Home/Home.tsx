import { useEffect } from "react";
import { StyledBanner } from "../../components/Banner/Banner.styles";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { StyledEditorPicks } from "../../components/EditorPicks/EditorPicks.styles";
import { fetchFeatured } from "../../store/slices/featuredSlice";
import { fetchArticles } from "../../store/slices/articlesSlice";
import { StyledSection } from "../../AppStyles";

interface HomeProps {
  className?: string;
}

export const Home: React.FC<HomeProps> = ({ className }) => {
  const featuredArticle = useAppSelector((state) => state.featuredSlice.data);
  const articles = useAppSelector((state) => state.articlesSlice.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFeatured());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <StyledSection className={className}>
      {featuredArticle && (
        <StyledBanner article={featuredArticle} articlePosition="left" />
      )}
      <StyledEditorPicks isAllAcrticles={false} articles={articles} />

      {articles.length && (
        <StyledBanner article={articles[0]} articlePosition="right" />
      )}
    </StyledSection>
  );
};
