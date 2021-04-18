import React from "react";
import { Link } from "react-router-dom";
import Column from "../column/column";
import Container from "../container/container";
import Icon from "../icon/icon";
import Row from "../row/row";
interface Props {
  basePath: string;
  path: string;
  route: any;
}

function ListbarItem({ basePath, path, route }: Props) {
  return (
    <>
      <Container>
        <Row>
          {/* // TODO These styles need to be added on css files of this component 25/03/2021 */}
          <Link style={{ display: "flex", flexDirection: "row" }} to={`${basePath}${path}`}>
            <Column sm={11} xs={11} md={7} lg={4}>
              <div>{/* <Icon classNames={icon} /> */}icon</div>
            </Column>
            <Column className={`d-none d-md-block d-lg-block d-xl-block `} sm={1} xs={1} md={5} lg={8}>
              <div>{route.path}</div>
            </Column>
          </Link>
        </Row>
      </Container>
    </>
  );
}

export default ListbarItem;
