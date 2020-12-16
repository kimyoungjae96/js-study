import React from "react";
import { Link, Route, NavLink } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink to="/profiles/kimyoungjae" activeStyle={activeStyle}>
            kimyoungjae
          </NavLink>
        </li>
        <li>
          <NavLink to="/profiles/gildong" activeStyle={activeStyle}>
            gildong
          </NavLink>
        </li>
      </ul>
      <Route
        path="/profiles/"
        exact
        render={() => <div>사용자를 선택해 주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
