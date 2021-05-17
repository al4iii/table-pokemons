import React from "react";
import { Divider, Col, Typography } from "antd";
const { Title } = Typography;

const Header = () => {
  return (
    <>
      <Col span={6} offset={6}>
        <Title level={2}> Table pokemons</Title>
      </Col>
      <Divider />
    </>
  );
};

export default Header;
