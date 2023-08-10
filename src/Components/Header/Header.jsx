import React, { useState } from "react";

//files import
import "./Header.css";

//assets import
import logo from "../../Assets/logo.png";

//material ui import
import { Search } from "@mui/icons-material";

export const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <a className="navbar-brand mt-3 mb-3" href="#">
            <img src={logo} alt="" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <form className="d-flex ms-auto " role="search">
              <div className="input-group me-3 hs1">
                <input
                  className="form-control bg-body-tertiary border-0 hs2 pt-2 pb-2 ps-4 rounded-start-3"
                  type="search"
                  placeholder="Search your topics"
                  aria-label="Search"
                  aria-describedby="search-prop"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <span
                  className="input-group-text border-0 rounded-end-3"
                  id="search-prop"
                >
                  <Search
                    className="searchIcon"
                    onClick={() => console.log(search)}
                  />
                </span>
              </div>
              <button className="btn btn-outline-0 me-3 fw-bold" type="submit">
                SignUp
              </button>
              <button className="btn hc5">Login</button>
            </form>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

// export const Header = () => {
//   const [search, setSearch] = useState("");

//   return (
//     <React.Fragment>
//       <header classNameName={headercss.hc1}>
//         <div classNameName={headercss.hc11}>
//           <div classNameName={headercss.hc2}>
//             <img
//               src={logo}
//               alt="news-arena-india"
//               classNameName={headercss.imageCont}
//             />
//           </div>
//           <div classNameName={headercss.hc3}>
//             <input
//               type="text"
//               placeholder="Search your topics"
//               onChange={(e) => setSearch(e.target.value)}
//               value={search}
//             />
//             <Search
//               classNameName={headercss.searchIcon}
//               style={{ color: "#f64549" }}
//               onClick={() => console.log(search)}
//             />
//             <button classNameName={headercss.hc4}>Sign Up</button>
//             <button classNameName={headercss.hc5}>Login</button>
//           </div>
//         </div>
//       </header>
//     </React.Fragment>
//   );
// };
