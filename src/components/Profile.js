import React from "react";
import Container from "./Container";

const Profile = ({ photo, name, position }) => {
  return (
    <Container classes="d-flex flex-column align-items-center w-100 p-2">
      <img src={photo} className="img-fluid rounded-circle" alt={name} />
      <h5 className="m-0 p-0">{name}</h5>
      <p className="text-muted">{position}</p>
    </Container>
  );
};
export default Profile;
