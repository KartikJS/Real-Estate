import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../img/reunion.png";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <NavLink to="/search/purpose/for-rent">
          <img src={Logo} alt="logo" className={classes.reunion} />
        </NavLink>

        <ul>
          <li>
            <NavLink
              to="/search/purpose/for-rent"
              className={({ isActive }) =>
                isActive ? "classes-active" : "none"
              }
            >
              Rent
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/search/purpose/for-buy"
              className={({ isActive }) =>
                isActive ? "classes.active" : "none"
              }
            >
              Buy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search/purpose/for-sell"
              className={({ isActive }) =>
                isActive ? "classes.active" : "none"
              }
            >
              Sell
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search/purpose/for-managingproperties"
              className={({ isActive }) =>
                isActive ? "classes.active" : "none"
              }
            >
              Manage Properties
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search/purpose/for-resources"
              className={({ isActive }) =>
                isActive ? "classes.active" : "none"
              }
            >
              Resources
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={classes.verification}>
        <a className={classes.btn}>Login</a>
        <a className={classes.btn + " " + classes.signup}>Signup</a>
      </div>
    </header>
  );
};

export default MainNavigation;
