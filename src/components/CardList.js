import React from "react";
import Container from "./Container";
import Card from "./Card";

const CardList = () => {
  return (
    <Container
      classes="d-flex justify-content-between"
      style={{ minHeight: "100px" }}
    >
      <Card />
    </Container>
  );
};
export default CardList;
