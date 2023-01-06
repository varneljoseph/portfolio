import React from "react";

import { useTranslation } from "react-i18next";

const GetInTouch = ({ heading, message, email }) => {
  const { t } = useTranslation();

  return (
    <div id="contact-me">
      <h2 className="display-4 pb-3 text-center">
        {`${t(heading.i18nTag, heading.i18nDefault)}`}
      </h2>
      <p className="lead text-center pb-3">
        {`${t(message.i18nTag, message.i18nDefault)}`} 
        <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>.
      </p>
    </div>
  );
};

export default GetInTouch;
