import React from "react";
import Container from "./Container";

const Card = () => {
  return (
    <Container classes="d-flex flex-wrap justify-content-between shadow-sm rounded w-25 bg-light mr-4 py-2 px-2">
      <div>
        <small className="text-uppercase" style={{ fontweight: "600" }}>
          Budget
        </small>
        <h4>$24,000</h4>
      </div>
      <div
        className="d-flex rounded-circle bg-danger"
        style={{ width: "40px", height: "40px" }}
      >
        <i
          className="fa fa-money m-auto p-2 text-white"
          aria-hidden="true"
          style={{ fontSize: "20px" }}
        />
      </div>
      <p>
        <i className="fa fa-arrow-down text-danger mt-3" aria-hidden="true" />
        16% Since Last Month
      </p>
    </Container>
  );
};
export default Card;
