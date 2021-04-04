import React from "react";
import { Container } from "reactstrap";
import not_found from "../../assets/illustrations/404.jpeg";

const NotFound = () => (
  <Container className="text-center mt-5">
    <img src={not_found} alt="404" />
    <h3>404 Page Not found!</h3>
    <a className="text-primary" href="/">Back to Home</a>
  </Container>
);

export default NotFound;
