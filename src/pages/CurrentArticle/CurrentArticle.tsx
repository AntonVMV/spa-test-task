import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import { useEffect } from "react";
import { fetchFullArticle } from "../../store/slices/currentArticleSlice";
import { useParams } from "react-router";
import { Title, Text } from "../../AppStyles";
import {
  setHashTags,
  convertDate,
  convertTime,
} from "../../helpers/heplerFunctions";
import { StyledBottomNav } from "../../components/BottomNav/BottomNav.style";
import { ArticleContent } from "./CurrentArticle.style";
import { Loader } from "../../components/Loader/Loader";
import { StyledSection } from "../../AppStyles";

interface CurrentArticleProps {
  className?: string;
}

export const CurrentArticle: React.FC<CurrentArticleProps> = ({
  className,
}) => {
  const { data, loading } = useAppSelector(
    (state) => state.currentArticleSlice
  );
  const dispatch = useAppDispatch();
  const { id } = useParams<"id">();

  useEffect(() => {
    if (id) {
      dispatch(fetchFullArticle(parseInt(id)));
    }
  }, [dispatch, id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {data && (
        <StyledSection className={className}>
          <img src={data.image} alt="article cover" />
          <ArticleContent>
            <Title size="m" type="primary">
              {data.title}
            </Title>
            <Text type="secondary">{`${data.author.name}, ${convertDate(
              data.createdAt
            )}, (${convertTime(data.readTime)} min)`}</Text>
            <Text type="secondary">{setHashTags(data.seo.keywords)}</Text>
            <Text
              type="primary"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
            <div>
              <Text type="secondary">About author</Text>
              <Title size="s" type="primary">
                {data.author.name}
              </Title>
              <Text type="secondary">{`@${data.author.nick}`}</Text>
              <Text type="primary">{data.author.about}</Text>
            </div>
          </ArticleContent>
        </StyledSection>
      )}
      {data && (
        <StyledBottomNav
          prev={data.prevId !== null ? `/Article/${data.prevId}` : null}
          next={data.nextId !== null ? `/Article/${data.nextId}` : null}
        />
      )}
    </>
  );
};
