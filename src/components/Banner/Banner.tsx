import { IArticle } from "../../store/types";
import { StyledArticlePreview } from "../Article/Article.style";
import React from "react";

interface BannerProps {
  article?: IArticle;
  articlePosition?: "left" | "right";
  className?: string;
}

const Banner: React.FC<BannerProps> = ({ article, className }) => {
  return (
    <div className={className}>
      {article && (
        <div>
          <StyledArticlePreview article={article} />
        </div>
      )}
    </div>
  );
};

export default React.memo(Banner);
