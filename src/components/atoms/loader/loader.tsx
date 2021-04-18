import React, { ReactElement } from "react";
import "./loader.scss";

interface IProps {
  message: string;
  gifLink: string;
  className?: string;
}

// Right now we using direct classes for styling but later we can decide how to pass css as classnames .

export default function Loader(props: IProps): ReactElement {
  const { message, gifLink, className } = props;

  return (
    <div className="loader-container">
      {/* <input type="image" src={gifLink} alt="loading" /> */}
      {/* we can use animation or gif as assets for loader images */}
      <div className="loader" />
      <span className="loading-text">{message}</span>
    </div>
  );
}
