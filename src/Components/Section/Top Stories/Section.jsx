import React from "react";
import imageOne from "../../../Assets/image1.png";

import "./Section.css";
import { Trending } from "../Trending/Trending";
import { BreakingNews } from "../Breaking News/BreakingNews";
import { NewsFeed } from "../NewsFeed/NewsFeed";

export const Section = () => {
  return (
    <React.Fragment>
      <div>
        <div className="container-xxl">
          <div className="row row-cols-1 row-cols-md-2">
            <div className="card border-0 pt-5 sc4">
              <div className="card-body">
                <a href="#" className="btn sc2">
                  Top Stories
                </a>
                <h1 className="card-title mt-3">
                  Explore Russia with Ease: Electronic Visa for Indian Passport
                  Holders...
                </h1>
                <p className="card-text mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut.
                </p>
                <p className="mt-3 mb-3">
                  <a className="link-underline-opacity-0 link-danger" href="#">
                    see more
                  </a>
                </p>
                <img src={imageOne} className="card-img-bottom" />
              </div>
            </div>
            <Trending />
          </div>
        </div>
        <BreakingNews />
        <NewsFeed />
      </div>
    </React.Fragment>
  );
};
