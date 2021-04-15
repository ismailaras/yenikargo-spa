import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ url, buttonLabel, clsName, style }) => {
    let clName = `btn ${clsName}`
    return (
      <Link style={style} className={clName} to={url}>
        {buttonLabel}
      </Link>
  );
};

export default LinkButton;
