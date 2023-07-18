import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className="nav">
      <h2>nav/menu</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/articles">All Articles</Link>
        </li>
      </ul>
      <ul className="topics-list">
        <li>
          <Link to="/coding">Coding</Link>
        </li>
        <li>
          <Link to="/football">Football</Link>
        </li>
        <li>
          <Link to="/cooking">Cooking</Link>
        </li>
      </ul>
    </nav>
  );
};
