import React from 'react';
import { Jumbotron } from './migration';
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";


import { useTranslation } from "react-i18next";

const Achievement = ({ heading, message, achievements }) => {

  const { t } = useTranslation();

  return (
    <section className="section" id="achievements">
      <Container className="p-5 ">
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {`${t(heading.i18nTag, heading.i18nDefault)}`}
          </h2>
          <Row>
            {
              achievements.data.map((data, index) => {
                return <AchievementCard key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}


const AchievementCard = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Col lg="5"  className="card shadow-lg p-3 mb-5 bg-white rounded">
      <div className="pb-2 text-center">
        <img className=" bg-white m-2 p-2" src={data.companylogo} alt="" />
        <p className="lead">
          <a target="_blank" rel="noreferrer noopener" href={data.url} className="pb-5">
            {`${t(data.role.i18nTag, data.role.i18nDefault)}`}
          </a>
        </p>

        <span className="p-2">
          {`${t(data.date.i18nTag, data.date.i18nDefault)}`}
        </span>

        <p className="pb-2">
         {data.externalLink &&  (
            <a
              className="btn btn-outline-dark"
              href={data.external.url}
              target="_blank"
              rel="noreferrer noopener"
              role="button"
              aria-label={`${t(data.external.i18nTag, data.external.i18nDefault)}`}
            >
              {`${t(data.visit.i18nTag, data.visit.i18nDefault)}`}
            </a>
          )}
         </p>
      </div>
    </Col>
  );
}



export default Achievement;