import { Subtitle, Title, Text } from "../../AppStyles";
import { IArticle } from "../../store/types";
import { StyledLink } from "../../AppStyles";
import { convertDate, convertTime } from "../../helpers/heplerFunctions";

interface ArticlerPrewiewProps {
  article: IArticle;
  className?: string;
}

export const ArticlePreview: React.FC<ArticlerPrewiewProps> = ({
  article,
  className,
}) => {
  return (
    <div className={className}>
      <Subtitle>{article.tag}</Subtitle>
      <StyledLink to={`/Article/${article.id}`}>
        <Title size="s" type="primary">
          {article.title}
        </Title>
      </StyledLink>
      <div>
        <Text type="secondary">
          {article.author}, {convertDate(article.createdAt)},
          {` (${convertTime(article.readTime)} min read)`}
        </Text>
      </div>
      <Text
        type="primary"
        dangerouslySetInnerHTML={{
          __html: article.description.slice(0, 350) + "...",
        }}
      />
    </div>
  );
};
