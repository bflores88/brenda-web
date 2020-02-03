import React from "react";
import "./Home.scss";
import Box from "../../components/UI/Box/Box";
import Helmet from "react-helmet";

const home = props => {
  return (
    <>
      <Helmet>
        <title>Home | Brenda Flores</title>
        <meta name="description" content="Software Developer and CPA " />
      </Helmet>
      <Box>
        <div className="Intro-Container">
          <h1 className="Intro">
            Hi, I'm <span className="Pinky">Brenda</span>.
          </h1>

          <p className="SlideInFromRight">I am a software engineer.</p>
        </div>
      </Box>
    </>
  );
};

export default home;
