import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllTopics } from '../utils/api';

export const Nav = ({ topics, setTopics }) => {
  useEffect(() => {
    getAllTopics().then(({ allTopics }) => {
      setTopics(allTopics);
    });
  }, []);

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/articles">All Articles</Link>
        </li>
      </ul>
      <ul className="topics-list">
        {topics.map(({ slug }) => {
          return (
            <li key={slug}>
              <Link to={`/topics/${slug}?sort_by=created_at&order=asc`}>
                {slug}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
