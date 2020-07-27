import React from "react";
import Container from "./Container";
import CardList from "./CardList";
import GraphList from "./GraphList";

const SectionContainer = () => {
  return (
    <Container classes="d-flex flex-column w-100 pt-4 pl-4 pr-2">
      <CardList />
      <GraphList />
    </Container>
  );
};
export default SectionContainer;
