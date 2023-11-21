import React, { useContext } from 'react';
import {
  Link,
  useMatch,
  useResolvedPath,
  useNavigate,
} from 'react-router-dom';

import { CurrentSessionContext } from '../contexts/CurrentSessionContext';

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link
        to={to}
        {...props}>
        {children}
      </Link>
    </li>
  );
}

const Header = () => {
  let login = useNavigate();

  const { currentSession, setCurrentSession } = useContext(
    CurrentSessionContext
  );

  const handleLogout = () => {
    setCurrentSession(null);

    login('/SignInPlayer');
  };

  return (
    <nav className='nav'>
      <Link
        to='/Play'
        className='brand logo'>
        Flippy
      </Link>

      <ul>
        {currentSession ? (
          <CustomLink
            to='/Play'
            className='brand navlink'>
            Hello, {currentSession[0].playerCodename}
          </CustomLink>
        ) : (
          <CustomLink
            to='/SignUpPlayer'
            className='brand navlink'>
            Create an account
          </CustomLink>
        )}

        <CustomLink
          to='http://localhost:4000/player/ranking'
          className='brand navlink'>
          Ranking
        </CustomLink>

        {currentSession && (
          <button className='brand btn'>
            <h5
              className='m-0'
              onClick={handleLogout}>
              Logout
            </h5>
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Header;
