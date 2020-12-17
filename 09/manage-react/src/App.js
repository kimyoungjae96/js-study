import React, { useCallback, useState } from "react";
import { Route } from "react-router-dom";
import NewsPage from "./NewsApi/NewsPage";
import ColorBox from "./ContextTutorial/components/ColorBox";
import ColorContext, { ColorProvider } from "./ContextTutorial/contexts/color";
import SelectColors from "./ContextTutorial/components/SelectColors";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
  // return <Route path={"/:category?"} component={NewsPage} />;
};

export default App;
