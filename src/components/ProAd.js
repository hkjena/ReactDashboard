import React from "react";
import Container from "./Container";

const ProAd = ({ text }) => (
  <Container classes="d-flex flex-column align-items-center w-100 p-2">
    <i
      class="fa fa-id-badge mr-2"
      style={{ fontSize: "40px", color: "blue" }}
      aria-hidden="true"
    />
    <b>Upgrade to Pro</b>
    <p class="text-muted text-center w-75 p-0">{text}</p>
    <button
      type="button"
      class="btn text-white text-uppercase"
      style={{ background: "blue" }}
    >
      Upgrade
    </button>
  </Container>
);
export default ProAd;
