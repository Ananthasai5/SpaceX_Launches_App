import { ReactElement } from "react";
import Containers from "react-bootstrap/Container";

interface IProps {
  children?: any;
  className?: string;
}

export default function Container(props: IProps): ReactElement {
  const { className, children } = props;
  return <Containers>{children}</Containers>;
}
