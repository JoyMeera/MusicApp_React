import {Link, NavLink, Outlet} from 'react-router-dom'

function Nav() {
  return (
    <>
      <nav>
        <ul className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Music">Music</NavLink>
          <NavLink to="/About">About</NavLink>
        </ul>
      </nav>
      <Outlet/>
    </>
  )
}

export default Nav