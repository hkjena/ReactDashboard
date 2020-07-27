import React from "react";
import Container from "./Container";
import MenuItem from "./MenuItem";

const MenuList = () => {
  const menuitems = [
    ["Dashboard", "fa fa-window-restore"],
    ["Users", "fa fa-users"],
    ["Products", "fa fa-shopping-bag"],
    ["Authentication", "fa fa-lock"],
    ["Typography", "fa fa-text-height"],
    ["Icons", "fa fa-picture-o"],
    ["Account", "fa fa-address-book"],
    ["Settings", "fa fa-cog"]
  ];
  return (
    <Container classes="ml-4 pb-4">
      {menuitems.map(([name, icon], i) => {
        return <MenuItem key={name} name={name} icon={icon} active={!i} />;
      })}
    </Container>
  );
};
export default MenuList;
