import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
//import leaf from "../../Assets/Projects/leaf.png";
//import emotion from "../../Assets/Projects/emotion.png";
import dic from "../../Assets/Projects/dic.jpg";
import Tic from "../../Assets/Projects/tic.jpeg";
//import suicide from "../../Assets/Projects/suicide.png";
import Calculator from "../../Assets/Projects/cal.png";

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
              imgPath={Tic}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="Tic-Tac-Toe is a game in which two players take turns in drawing either an ` O' or an ` X' in one square of a grid consisting of nine squares. The winner is the first player to get three of the same symbols in a row. ...a game of Tic-Tac-Toe."
              ghLink="https://github.com/Bhanuprakashvasa/Tic-Tac-Toe.git"
              demoLink="https://radiant-sopapillas-ca371d.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calculator}
              isBlog={false}
              title="Calculator"
              description="A Calculator is a device that performs arithmetic operations on numbers like addition, subtraction, multiplication and division ."
              ghLink="https://github.com/Bhanuprakashvasa/Calculator.git"
              demoLink="https://keen-pavlova-c43898.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dic}
              isBlog={false}
              title="Dictionary"
              description="Dictionaries can help you in your reading and writing, and to improve your vocabulary. A dictionary can be used to look up the meaning of a word. You can also use a dictionary to check the spelling of a word. Dictionaries may also give other information about words, such as word type and word origin."
              ghLink="https://github.com/Bhanuprakashvasa/Dictionary.git"
              demoLink="https://glowing-marigold-c986f9.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
