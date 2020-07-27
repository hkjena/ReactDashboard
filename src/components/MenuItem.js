import React from "react";
import Container from "./Container";

const MenuItem = ({ name, icon, active }) => {
  return (
    <Container classes="p-2">
      <a
        href="/#"
        className={
          active ? `text-decoration-none` : `text-decoration-none text-dark`
        }
        style={{ fontWeight: "500" }}
      >
        <i class={`${icon} mr-2`} aria-hidden="true" />
        {name}
      </a>
    </Container>
  );
};
export default MenuItem;
