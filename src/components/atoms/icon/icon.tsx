import React, { ReactElement } from "react";
import "./icon.scss";
interface IProps {
  classNames: string;
}
export default function Icon(props: IProps): ReactElement {
  const { classNames } = props;
  return (
    <>
      <i className={classNames}></i>
    </>
  );
}
