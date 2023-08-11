import React from "react";

export const Newsletter = () => {
  return (
    <React.Fragment>
      <div
        className="card text-center"
        style={{ backgroundColor: "#F50022", zIndex: "-10" }}
      >
        <div className="card-body">
          <h2 className="card-title mt-5 text-light">Newsletter</h2>
          <h6 className="text-light ps-4 pe-4 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h6>
          <form className="d-flex ms-auto justify-content-center mt-5 mb-5">
            <input
              type="text"
              placeholder="write email address here"
              className="rounded border-0 ps-2 col-8"
            />
            <button className="btn bg-white text-danger ms-2">Sign Up</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
