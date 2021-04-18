import React from "react";
import classNames from "classnames";
import "./pageHeader.scss";

interface IProps {
  logoUrl: string;
  title: string;
  alt: string;
  className?: string;
  customClass?: string;
}

export const PageHeader = (props: IProps): React.ReactElement => {
  const { logoUrl = "", className = "", title = "", customClass = "", alt = "" } = props;
  const wrapperClass = classNames("page-header", className, customClass);
  return (
    <div className={wrapperClass}>
      <img src={logoUrl} alt={alt} className="page-header-image" />
      <h2 className="page-header-title">{title}</h2>
    </div>
  );
};

export default PageHeader;
