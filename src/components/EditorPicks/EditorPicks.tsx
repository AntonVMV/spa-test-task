import { IArticle } from "../../store/types";
import { StyledArticlePreview } from "../Article/Article.style";
import { ArticlesList, StyledTitle } from "./EditorPicks.styles";
import { StyledLink } from "../../AppStyles";

interface EditorPicksProps {
  isAllAcrticles: boolean;
  articles: IArticle[];
  className?: string;
}

export const EditorPicks: React.FC<EditorPicksProps> = ({
  isAllAcrticles,
  className,
  articles,
}) => {
  const sliceArray = (isFull: boolean, arr: IArticle[]) => {
    return isFull ? arr : arr.slice(0, 3);
  };

  return (
    <div className={className}>
      <StyledTitle size="l" type="secondary">
        Editor's Picks
      </StyledTitle>
      {articles && (
        <ArticlesList>
          {articles &&
            sliceArray(isAllAcrticles, articles).map((item) => {
              return (
                <li key={item.id}>
                  <StyledLink to={`/Article/${item.id}`}>
                    <img src={item.image} alt="article logo" />
                  </StyledLink>
                  <StyledArticlePreview article={item} />
                </li>
              );
            })}
        </ArticlesList>
      )}
    </div>
  );
};
