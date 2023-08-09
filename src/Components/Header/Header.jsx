import React from "react";

//files import
import headercss from "./Header.module.css";

//assets import
import logo from "../../Assets/logo.png";

//material ui import
import { Search } from "@mui/icons-material";

export const Header = () => {
  return (
    <React.Fragment>
      <header className={headercss.hc1}>
        <div className={headercss.hc2}>
          <img src={logo} alt="news-arena-india" />
        </div>
        <div className={headercss.hc3}>
          <input type="text" placeholder="Search your topics" />
          <Search
            className={headercss.searchIcon}
            style={{ color: "#f64549" }}
          />
          <button className={headercss.hc4}>Sign Up</button>
          <button className={headercss.hc5}>Login</button>
        </div>
      </header>
    </React.Fragment>
  );
};
