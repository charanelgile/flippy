import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Header() {
  return (
    <nav className="nav">
      <Link to="/" className="header-title">
        Flippy
      </Link>
      <ul>
        <CustomLink to="/ranking">Ranking</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/signup">Create an account</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
