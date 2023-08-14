import React from "react";
import image2 from "../../../Assets/getset.png";

import { Newsletter } from "../Newsletter/Newsletter";
import { TrendingSection } from "../Trending Section/TrendingSection";

import { NavItem } from "react-bootstrap";
import { BreakingNewsCards } from "./BreakingNewsCards";
import { BreakingNewsTwo } from "./BreakingNewsTwo";

//styles
import "./Styles/BreakingNews.css";

export const BreakingNews = () => {
  return (
    <React.Fragment>
      <div className="container-xxl">
        <div className="row">
          <div className="col-sm-8 mt-5" style={{ zIndex: "-10" }}>
            <div className="card border-0">
              <div className="card-body">
                <h1 className="card-title fw-bold bn1">Breaking News</h1>

                <div className="card bg-body-tertiary border-0 p-2 mt-5">
                  <div className="card-body">
                    <img className="card-img-top" src={image2} alt="" />
                    <h4 className="card-text mt-4 fw-bold">
                      {" "}
                      18 Instagram Moments You May Have Missed This Week
                    </h4>

                    <p className="card-text mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="mt-3 mb-2">
                      <a
                        className="link-underline-opacity-0 link-danger"
                        href="#"
                      >
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-0">
              <BreakingNewsCards />
              <BreakingNewsCards />
            </div>
          </div>
          <div className="col-sm-4 mt-5">
            <Newsletter />
            {/* <TrendingSection /> */}
          </div>
        </div>
        <BreakingNewsTwo />
      </div>
    </React.Fragment>
  );
};
