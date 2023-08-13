import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link
        to={to}
        {...props}>
        {children}
      </Link>
    </li>
  );
}

const Header = () => {
  return (
    <nav className="nav">
      <Link
        to="/"
        className="brand logo">
        Flippy
      </Link>

      <ul>
        <CustomLink
          to="/Ranking"
          className="brand navlink">
          Ranking
        </CustomLink>

        <CustomLink
          to="/SignUpPlayer"
          className="brand navlink">
          Create an account
        </CustomLink>
      </ul>
    </nav>
  );
};

export default Header;
