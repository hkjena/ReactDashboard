import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";
import SectionContainer from "./components/SectionContainer";

export default function App() {
  return (
    <>
      <Navbar />
      <Container
        classes="container-fluid d-flex p-0"
        style={{ minHeight: "calc(100vh - 56px)" }}
      >
        <Sidebar />
        <SectionContainer />
      </Container>
    </>
  );
}
