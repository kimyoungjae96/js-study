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

const App = () => {
  // return (
  //   <ColorProvider>
  //     <div>
  //       <SelectColors />
  //       <ColorBox />
  //     </div>
  //   </ColorProvider>
  // );
  // return <Route path={"/:category?"} component={NewsPage} />;
  return (
    <div>
      <CounterContainer />
      <SampleContainer />
    </div>
  );
};

export default App;
