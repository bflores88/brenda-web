import React from "react";
import "./About.scss";
import Box from "../../components/UI/Box/Box";
import Helmet from "react-helmet";

const about = props => {
  return (
    <>
      <Helmet>
        <title>About | Brenda Flores</title>
        <meta name="description" content="Software Developer and CPA " />
      </Helmet>
      <Box>
        <div className="About">
          <h1 className="AboutTitle">About</h1>
          <p>I'm a software engineer in Seattle, WA.</p>

          <p>
            Before that, I was born and raised in Oahu, Hawaii. I had a
            successful and progressive career in accounting and finance,{" "}
            <span className="Pinky">BUT...</span> It was not something I wanted
            to do for the rest of my life.
          </p>

          <p>
            In 2019, I left my job, graduated from an intensive coding bootcamp
            on Oahu, uprooted my life, and moved to Seattle. When I'm not
            coding, I enjoy going to Meetups, bouldering, and spending time with
            my fur babies.{" "}
            <span role="img" aria-label="dog">
              🐕
            </span>
            <span role="img" aria-label="cat">
              🐈
            </span>
          </p>
          <p>I am currently open to new work opportunities.</p>
        </div>
        <div className="Education">
          <h2>Education</h2>

          <h3 className="Greeny">Full Stack JavaScript Web Engineering</h3>
          <h4>DevLeague Bootcamp</h4>
          <p>
            800+ hours of hand-on-keyboard experience with full-stack
            development including HTML, CSS, JavaScript, React, Angular,
            Node.js, PostgreSQL, Git, Docker, AWS, and more.
          </p>
          <br />
          <h3 className="Greeny">University of Hawaii - Manoa</h3>
          <h4>Masters of Business Administration</h4>
          <p>
            Completed the Executive MBA program while working full-time and
            gained strategic, analytical, and interpersonal skills.
          </p>
          <br />
          <h3 className="Greeny">Seattle University</h3>
          <h4>Bachelors of Arts in Business Administration</h4>
          <p>Accounting major with a minor in Finance.</p>
        </div>
        <div className="Skills">
          <h2>Skills</h2>
          <div>
            <ul>
              <li>
                <i class="FaIcon fab fa-js-square" title="javascript"></i>
              </li>
              <li>
                <i class="FaIcon fab fa-html5" title="html5"></i>
              </li>
              <li>
                <i class="FaIcon fab fa-css3-alt" title="css"></i>
              </li>
            </ul>
            <ul>
              <li>
                <i class="FaIcon fab fa-node-js" title="nodejs"></i>
              </li>
              <li>
                <i class="FaIcon fab fa-react" title="react"></i>
              </li>
              <li>
                <i class="FaIcon fab fa-sass" title="sass"></i>
              </li>
            </ul>
            <ul>
              <li>
                <i class="FaIcon fab fa-git-alt" title="git"></i>
              </li>
              <li>
                <i class="FaIcon fab fa-docker" title="docker"></i>
              </li>
              <li>
                <i class="FaIcon fab fa-angular" title="angular"></i>
              </li>
            </ul>
            <br />
            <br />
            <p>
              I am comfortable working with the technologies above including
              React-Router, PostgreSQL, REST APIs, testing, and OOP.
            </p>
            <p>
              I am also familiar with and learning C#, ASP.NET Core, and ASP.NET
              MVC.
            </p>
          </div>
        </div>
      </Box>
    </>
  );
};

export default about;
