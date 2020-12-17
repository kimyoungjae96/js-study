import React from "react";
import Categories from "./Categories";
import NewsList from "./NewsLIst";

const NewsPage = ({ match }) => {
  const category = match.params.category || "all";
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage
;
