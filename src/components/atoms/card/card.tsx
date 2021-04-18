import React, { ReactElement, ReactNode } from "react";
import classNames from "classnames";
import "./card.scss";

interface IProps {
  subtitle?: string;
  imageUrl?: string;
  type?: string;
  customClass?: string;
  children: ReactNode;
}

interface IHeader {
  children?: ReactNode;
}

interface IBody {
  children?: ReactNode;
}
interface IFooter {
  children?: ReactNode;
}
export default function Card(props: IProps): ReactElement {
  const { type, customClass, children } = props;
  const className = classNames("card", type, customClass);
  return (
    <div className={className}>
      <div>{children}</div>
    </div>
  );
}

const Header = ({ children }: IHeader) => {
  return <div className="card__header">{children}</div>;
};
const Body = ({ children }: IBody) => {
  return <div className="card__body">{children}</div>;
};
const Footer = ({ children }: IFooter) => {
  return <div className="card__footer">{children}</div>;
};
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
