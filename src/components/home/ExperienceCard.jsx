import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6"  className="card shadow-lg p-3 mb-5 bg-white rounded">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" src={data.companylogo} alt="" />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;