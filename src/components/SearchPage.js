import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../datalayer/StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "../response";
import { Link } from "@material-ui/core";
import Search from "./Search";
const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  //live apicall
  //const { data } = useGoogleSearch(term);
  const data = Response;
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
      </div>
      <div className="searchPage_resultsBody">
        <Search hideButtons />
      </div>
    </div>
  );
};

export default SearchPage;
