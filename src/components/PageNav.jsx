import {NavLink} from 'react-router-dom';

function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={'/pricing'}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={'/product'}>Product</NavLink>
        </li>
        <li>
          <NavLink to={'/login'}>Login</NavLink>
        </li>
        <li>
          <NavLink to={'*'}>PageNotFound</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
