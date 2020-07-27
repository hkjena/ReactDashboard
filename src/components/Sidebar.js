import React from "react";
import Container from "./Container";
import Profile from "./Profile";
import MenuList from "./MenuList";
import ProAd from "./ProAd";

const Sidebar = () => {
  return (
    <Container
      classes="bg-light shadow-sm d-flex flex-column align-self-stretch"
      style={{ width: "200px" }}
    >
      <Profile
        photo="https://picsum.photos/50"
        name="Shen Zhi"
        position="Brand Director"
      />
      <MenuList />
      <ProAd text="Lorem ipsum dolor, sit amet" />
    </Container>
  );
};
export default Sidebar;
