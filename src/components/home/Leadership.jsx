import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";

import { useTranslation } from "react-i18next";

const Leadership = ({ heading, message, img, imageSize }) => {

  const { t } = useTranslation();

  return (
    <Jumbotron
      id="leadership"
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-4 pb-5 text-center">
        {`${t(heading.i18nTag, heading.i18nDefault)}`}
      </h2>
      <div className="row">
        <div className="col-md-5">
          <p className="lead">
            {`${t(message.i18nTag, message.i18nDefault)}`}
          </p>
        </div>
        <div className="col-md-7">
          <Carousel>
            {img.map((value, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={value.img}
                    alt="First slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                  <Carousel.Caption>
                    <h3>{value.label}</h3>
                    <p>
                      {value.paragraph}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Leadership;
