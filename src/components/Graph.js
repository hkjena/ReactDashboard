import React from "react";
import Container from "./Container";

const Graph = ({ classes }) => {
  return (
    <>
      <Container classes={classes}>
        {/*  top  */}
        <div class="w-100 d-flex justify-content-between">
          <small style={{ fontWeight: "600" }}>Latest Sales</small>
          <div class="btn-group">
            <button
              class="btn dropdown-toggle text-small p-0"
              data-toggle="dropdown"
              style={{ fontWeight: "600" }}
            >
              Last 7 Days
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="/#">
                Action
              </a>
              <a class="dropdown-item" href="/#">
                Another action
              </a>
            </div>
          </div>
        </div>
        {/* Middle */}
        <img
          src="https://pnp.github.io/sp-dev-fx-controls-react/assets/BarChart.png"
          style={{ height: "80%" }}
          alt=""
        />
        {/* bottom */}
        <div class="d-flex justify-content-end mt-auto">
          <a
            class="text-decoration-none text-dark"
            href="/#"
            style={{ fontSize: "14px", fontWeight: "500" }}
          >
            OVERVIEW
            <i class="fa fa-caret-right ml-1" aria-hidden="true" />
          </a>
        </div>
      </Container>
      {/* Graph2 */}
      <div
        class="d-flex flex-column rounded py-2 px-3 bg-light"
        style={{ width: "23.5%" }}
      >
        {/* <!-- top --> */}
        <div class="w-100 d-flex justify-content-between">
          <span style={{ fontWeight: "600" }}>Users By Device</span>
          <a href="/#">
            <i
              class="fa fa-refresh text-dark cursor-pointer"
              aria-hidden="true"
            />
          </a>
        </div>
        {/* <!-- middle --> */}
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/conic-donut.png"
          style={{ height: "70%" }}
          alt=""
        />
        {/* <!-- Bottom --> */}
        <div class="d-flex justify-content-around mt-auto">
          <div class="d-flex flex-column text-center">
            <i class="fa fa-desktop" aria-hidden="true" />
            Desktop
            <b class="text-primary" style={{ fontSize: "20px" }}>
              63%
            </b>
          </div>
          <div class="d-flex flex-column text-center">
            <i class="fa fa-tablet" aria-hidden="true" />
            Tablet
            <b class="text-danger" style={{ fontSize: "20px" }}>
              15%
            </b>
          </div>
          <div class="d-flex flex-column text-center">
            <i class="fa fa-mobile" aria-hidden="true" />
            Mobile
            <b class="text-warning" style={{ fontSize: "20px" }}>
              23%
            </b>
          </div>
        </div>
      </div>
    </>
  );
};
export default Graph;
