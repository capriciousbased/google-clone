import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../datalayer/StateProvider";
import useGoogleSearch from "../useGoogleSearch";

import { Link } from "@material-ui/core";
import Search from "../components/Search";
import response from "../response";

import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  //live apicall
  //const { data } = useGoogleSearch(term);
  const data = response;
  console.log(data);
  return (
    <div className="searchPage">
      <div class="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div class="searchPage__headerBody">
          <Search hideButtons />
          <div class="searchPage__options">
            <div class="searchPage__optionsLeft">
              <div class="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div class="searchPage__option">
                <DescriptionIcon />
                <Link to="/all">News</Link>
              </div>
              <div class="searchPage__option">
                <ImageIcon />
                <Link to="/all">Images</Link>
              </div>
              <div class="searchPage__option">
                <LocalOfferIcon />
                <Link to="/all">shopping</Link>
              </div>
              <div class="searchPage__option">
                <RoomIcon />
                <Link to="/all">maps</Link>
              </div>
              <div class="searchPage__option">
                <MoreVertIcon />
                <Link to="/all">more</Link>
              </div>
            </div>
            <div class="searchPage__optionsRight">
              <div class="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div class="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
