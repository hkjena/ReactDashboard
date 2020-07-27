import React from "react";
import Container from "./Container";
import Graph from "./Graph";

const GraphList = () => {
  return (
    <Container classes="mt-4 d-flex" style={{ height: "350px" }}>
      <Graph classes="d-flex flex-column w-75 bg-light rounded mr-4 py-2 px-3" />
    </Container>
  );
};
export default GraphList;
