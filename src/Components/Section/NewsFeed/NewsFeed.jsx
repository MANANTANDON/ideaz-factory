import React from "react";
import "./styles/Newsfeed.css";
import newsFeed from "../../../Assets/Newsfeed.png";

export const NewsFeed = () => {
  const testText = [
    "Newsfeed",
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ];
  return (
    <React.Fragment>
      <div className="container-fluid nf1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-sm-4">
              <div className="card border-0 bg-transparent text-center">
                <div className="card-title fw-bold text-light nf2 mt-5">
                  {testText[0]}
                </div>
                <div className="card-text mt-3 mb-5 text-light">
                  {testText[1]}
                </div>
              </div>
            </div>
            <div className="col-sm-8 border border-white"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
