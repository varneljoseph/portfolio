import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

import { useTranslation } from "react-i18next";

function SkillsBar({ skill, value, isScrolled }) {
  const { t } = useTranslation();

  return (
    <div style={{ width: "95%" }}>
      <p className="lead mb-1 mt-2">
        {`${t(skill.i18nTag, skill.i18nDefault)}`}
      </p>
      <ProgressBar
        className={!isScrolled ? "progress" : " progress-bar-animation"}
        now={value}
        label={`${value}%`}
      />
    </div>
  );
}

export default SkillsBar;
