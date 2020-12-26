import React from 'react';
import { Route } from 'react-router-dom';
import Menu from './ssr-recipe/components/Menu';
import RedPage from './ssr-recipe/pages/RedPage';
import BluePage from './ssr-recipe/pages/BluePage';
import UsersPage from './ssr-recipe/pages/UsersPage';

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
