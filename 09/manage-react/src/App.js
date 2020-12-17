import React, { useCallback, useState } from "react";
import { Route } from "react-router-dom";
import NewsPage from "./NewsApi/NewsPage";

const App = () => {
  return <Route path={"/:category?"} component={NewsPage} />;
};

export default App;
