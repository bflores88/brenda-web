import React from "react";
import "./Projects.scss";
import Box from "../../components/UI/Box/Box";
import Helmet from "react-helmet";

const projects = props => {
  return (
    <>
      <Helmet>
        <title>Projects | Brenda Flores</title>
      </Helmet>
      <Box>
        <h1>Projects</h1>
      </Box>
    </>
  );
};

export default projects;
