import React, { useState } from "react";

//files import
import headercss from "./Header.module.css";

//assets import
import logo from "../../Assets/logo.png";

//material ui import
import { Search } from "@mui/icons-material";

export const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <React.Fragment>
      <header className={headercss.hc1}>
        <div className={headercss.hc2}>
          <img
            src={logo}
            alt="news-arena-india"
            className={headercss.imageCont}
          />
        </div>
        <div className={headercss.hc3}>
          <input
            type="text"
            placeholder="Search your topics"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <Search
            className={headercss.searchIcon}
            style={{ color: "#f64549" }}
            onClick={() => console.log(search)}
          />
          <button className={headercss.hc4}>Sign Up</button>
          <button className={headercss.hc5}>Login</button>
        </div>
      </header>
    </React.Fragment>
  );
};
