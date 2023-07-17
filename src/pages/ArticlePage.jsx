import { ArticleFull } from '../components/ArticleFull';
import { CommentsComp } from '../components/CommentsComp';
import { VotesComp } from '../components/VotesComp';

export const ArticlePage = () => {
  return (
    <article className="article-page">
      <ArticleFull />
      <VotesComp />
      <CommentsComp />
    </article>
  );
};
