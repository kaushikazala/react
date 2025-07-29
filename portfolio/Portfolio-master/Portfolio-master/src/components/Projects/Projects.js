import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Product API"
              description=" ...."
              ghLink="https://github.com/kaushikazala/react-js/tree/main/project1/react-app"
              demoLink="https://react-project1-amber.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Counter App"
              description="....."
              ghLink="https://github.com/kaushikazala/react-js/tree/main/day3/react-app"
              demoLink="https://react-js-d4kl.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Login Page"
              description="..."
              ghLink="https://github.com/kaushikazala/react-js/tree/main/project2/react-app"
              demoLink="https://react-project3-pi.vercel.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>



  );
}

export default Projects;
