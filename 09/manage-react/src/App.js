import React, { useCallback, useState } from "react";
import axios from "axios";
import NewsList from "./NewsApi/NewsLIst";
import Categories from "./NewsApi/Categories";

const App = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
