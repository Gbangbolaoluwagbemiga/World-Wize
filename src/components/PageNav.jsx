import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.css';
import Logo from './Logo';

function PageNav() {
  return (
    <nav className={`navbar navbar-expand-lg  ${styles.nav}`}>
      <div className="container-fluid mb-4">
        <Logo />
        <button
          className={`navbar-toggler ${styles.hamburger}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-md-auto" id="navbarNav">
          <ul className="navbar-nav ms-md-auto mb-2 mb-lg-0">
            <li className="nav-item mt-sm-4 mt-md-0">
              <NavLink to={'/pricing'}>Pricing</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to={'/product'}>Product</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to={'/login'} className={styles.ctaLink}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default PageNav;
