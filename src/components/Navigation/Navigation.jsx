import { NavLink } from "react-router-dom";
import { getLoggedIn } from "../../redux/auth/auth-selectors";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/auth-operations";
// import Button from "@material-ui/core/Button";
import css from "./Navigation.module.css";

function Navigation() {
  const isLoggedIn = useSelector(getLoggedIn);

  const dispatch = useDispatch();

  return (
    <header className={css.header}>
      <div>
        <NavLink to="/">
          <button className={css.sliding_button}>Главная</button>
        </NavLink>

        {isLoggedIn && (
          <NavLink to="/contacts">
            <button className={css.sliding_button}>Контакты</button>
          </NavLink>
        )}
      </div>

      {isLoggedIn ? (
        <button
          onClick={() => dispatch(logOut())}
          className={css.sliding_button}
        >
          Logout
        </button>
      ) : (
        <div>
          <NavLink to="/login">
            <button className={css.sliding_button}>Логин</button>
          </NavLink>

          <NavLink to="/register">
            <button className={css.sliding_button}>Регистрация</button>
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Navigation;
