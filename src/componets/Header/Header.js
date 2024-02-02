import React from 'react';
import "./header.css"
import NetflixLogo from "../../assets/images/netflix logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
    return (
      <div className="header_outer_container">
        <div className="header_container">
          <div className="header_left">
            <ul>
              <li>
                <img
                  src={NetflixLogo}
                  alt="neflixlogo"
                  width="100"
                  height="50"
                />
              </li>
              <li>Homes</li>
              <li>TvShows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>Mylist</li>
              <li>Browse by Language</li>
            </ul>
          </div>
          <div className="header_right">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>Kids</li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Header;
