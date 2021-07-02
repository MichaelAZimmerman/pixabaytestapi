import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { clearFavorites, clearUser, clearSearch } from "./redux/actions";
import ProtectedRoute from "./shared/ProtectedRoute";
import Login from "./components/Login";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

function App({ username, clearFavorites, clearSearch, clearUser }) {
  return (
    <Router>
      <header className="flex-wrap">
        {username ? (
          <h3>Currently logged in as {username}</h3>
        ) : (
          <h3>Please log in to continue.</h3>
        )}
      </header>

      <nav className="flex-wrap">
        {!username && (
          <NavLink
            activeClassName="active"
            className="link text-center"
            to="/login"
            onClick={() => {
              clearFavorites();
              clearSearch();
              clearUser();
            }}
          >
            Login
          </NavLink>
        )}
        {username && (
          <>
            <NavLink
              activeClassName="active"
              className="link text-center"
              to="/search"
            >
              Search
            </NavLink>

            <NavLink
              activeClassName="active"
              className="link text-center"
              to="/favorites"
            >
              Favorites
            </NavLink>
            <NavLink
              className="link text-center"
              to="/login"
              onClick={() => {
                clearFavorites();
                clearUser();
                clearSearch();
              }}
            >
              Logout
            </NavLink>
          </>
        )}
      </nav>
      <main>
        <Switch>
          <ProtectedRoute path="/login" reqUser={false} component={Login} />
          <ProtectedRoute path="/search" reqUser={true} component={Search} />
          <ProtectedRoute
            path="/favorites"
            reqUser={true}
            component={Favorites}
          />
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    username: state.user.username,
  };
}

const mapDispatchToProps = {
  clearFavorites,
  clearUser,
  clearSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
