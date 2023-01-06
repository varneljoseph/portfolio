import React from "react";
import Container from "react-bootstrap/Container";
import { getInTouch } from "../editable-stuff/config.js";

import { useTranslation } from "react-i18next";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  const { t } = useTranslation();

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center " id="contact-me">
      <Container>
        {props.children}
        
        <p>
          <small className="text-muted">
            {t('footer.open-source-using', "Open source code using")}
            <i className="fab fa-react" />. 
            {t('footer.feel-free-to', "Feel free to ")}
            <a href={getInTouch.repoUrl}> 
            {t('footer.fork-make-yours', "fork and make your own")}
            </a>.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
