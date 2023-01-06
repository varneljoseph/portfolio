import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";


const Project = ({ heading, message, username, length, specfic, projects }) => {
  const { t } = useTranslation();  
  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="p-5 ">
        <h2 className="display-4 pb-5 text-center">
          {`${t(heading.i18nTag, heading.i18nDefault)}`}
        </h2>
        <Row>
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-card-${index}`}
              id={`project-card-${index}`}
              value={project}
            />
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
