import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
// import axios from "axios";

import { useTranslation } from "react-i18next";

const ProjectCard = ({ value }) => {
  const {
    sitelogo,
    name,
    description,
    externalLink,
    external,
    // visit,
    technologies,
    stargazers_count,
    languages_url,
    pushed_at,
  } = value;

  const { t } = useTranslation();

  return (
    <Col md={6}>
      <Card className="card shadow-lg pb-3 p-2 mb-5 bg-white rounded">
        <Card.Img variant="center" className="p-2" src={sitelogo} />
        <Card.Body>
          {false && (
            <Card.Title as="h5">
              {t(name.i18nTag, name.i18nDefault) || <Skeleton />} 
            </Card.Title>
          )}
          <Card.Text>
            {
              (!description && !description.i18nTag) ? "" : t(description.i18nTag, description.i18nDefault) 
              || <Skeleton count={3} />
            }
          </Card.Text>
          {externalLink ? <CardButtons site_url={external.url} /> : <Skeleton count={2} />}
          <hr />
          {technologies && technologies.showTechno ? (
            <Language technologies={technologies} data={technologies.data} languages_url={languages_url} repo_url={external.url} />
          ) : (
            <Skeleton count={1} />
          )}
          { false && (
            <div>
              {value ? (
                <CardFooter star_count={stargazers_count} repo_url={external.url} pushed_at={pushed_at} />
              ) : (
                <Skeleton />
              )}
            </div>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};


const CardButtons = ({ site_url }) => {
  const { t } = useTranslation();

  return (
    <div className="d-grid justify-content-md-center">
      <a
        href={`${site_url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-secondary mx-12"
      >
        <i className="fab fa-link" />
         {t('projects.visit-website', "Visit Website")}
      </a>
    </div>
  );
};


const Language = ({ technologies, languages_url, repo_url, data }) => {
  const { t } = useTranslation();

  return (
    <div className="pb-3">
      { (
        <span>
        {t('projects.technologies.label', "Technologies:")}
        {" "}
        </span>
      )}
      {data.length
        ? data.map((techno, index) => (
          <a
            key={index}
            className="card-link"
            href={repo_url + `/search?l=${techno.language.i18nTag}`}
            target=" _blank"
            rel="noopener noreferrer"
            disabled
          >
            <span key={index} className="badge bg-light text-dark">
              
              {t(techno.language.i18nTag, techno.language.i18nDefault)}
              {false && technologies && technologies.showvalue && (
                <span>
                {Math.trunc(techno.value)}
                %
                </span>
              )}
            </span>
          </a>

        ))
        : 
        t('projects.code-yet-to-be-deployed.label', "Code yet to be deployed.")        
      }
    </div>
  );
};

const CardFooter = ({ star_count, repo_url, pushed_at }) => {
  const [updated_at, setUpdated_at] = useState("0 mints");

  const handleUpdatetime = useCallback(() => {
    const date = new Date(pushed_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      if (hours < 1) return setUpdated_at("just now");
      let measurement = hours === 1 ? "hour" : "hours";
      return setUpdated_at(`${hours.toString()} ${measurement} ago`);
    } else {
      const options = { day: "numeric", month: "long", year: "numeric" };
      const time = new Intl.DateTimeFormat("en-US", options).format(date);
      return setUpdated_at(`on ${time}`);
    }
  }, [pushed_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  return (
    <p className="card-text">
      <a
        href={repo_url + "/stargazers"}
        target=" _blank"
        className="text-dark text-decoration-none"
      >
        <span className="text-dark card-link mr-4">
          <i className="fab fa-github" /> Stars{" "}
          <span className="badge badge-dark">{star_count}</span>
        </span>
      </a>
      <small className="text-muted">Updated {updated_at}</small>
    </p>
  );
};

export default ProjectCard;
