import React, { useCallback, useState } from "react";
import { Route } from "react-router-dom";
import NewsPage from "./NewsApi/NewsPage";
import ColorBox from "./ContextTutorial/components/ColorBox";
import ColorContext, { ColorProvider } from "./ContextTutorial/contexts/color";
import SelectColors from "./ContextTutorial/components/SelectColors";
import Counter from "./redux/components/Counter";
import CounterContainer from "./redux-saga/containers/CounterContainer";
import Todos from "./redux/components/Todos";
import TodosContainer from "./redux/containers/TodosContainer";
import SampleContainer from "./redux-saga/containers/SampleContainer";
import Menu from './ssr-recipe/components/Menu'
import RedPage from './ssr-recipe/pages/RedPage'
import BluePage from './ssr-recipe/pages/BluePage'

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
    </div>
  );
};

export default App;
