import React from "react";
import "./Styles/BreakingNews.css";
import { BreakingNewsCards } from "./BreakingNewsCards";

export const BreakingNewsTwo = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <React.Fragment>
      <div className="container-xxl bnt1">
        <div className="card border-0 mt-5 fw-bold bn1">Breaking News</div>
        <div className="row">
          <div className="row row-cols-md-3">
            {arr.map((item, key) => (
              <div key={key}>
                <BreakingNewsCards />
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
