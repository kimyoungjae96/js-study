import React from "react";
import { Route } from "react-router-dom";
import Menu from "./ssr-recipe/components/Menu";
import loadable from "@loadable/component";

const RedPage = loadable(() => import("./ssr-recipe/pages/RedPage"));
const BluePage = loadable(() => import("./ssr-recipe/pages/BluePage"));
const UsersPage = loadable(() => import("./ssr-recipe/pages/UsersPage"));

function App() {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
      <Route path="/users" component={UsersPage} />
    </div>
  );
}

export default App;
