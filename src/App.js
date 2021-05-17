import { Row, Col, Slider, Typography } from "antd";
import Header from "./components/Header";
import React, { useState } from "react";
import _Table from "./components/Table";

const App = () => {
  const [rows, setRows] = useState(5);
  return (
    <>
      <Header />
      <Row>
        <Col xs={24} md={{ span: 12, offset: 6 }}>
          <Typography.Title level={4}>
            Number of Pokémon per page
            <Slider min={5} max={50} deaultValue={rows}
            onChange={setRows}/>
          </Typography.Title>
          <_Table rows={rows} />
        </Col>
      </Row>
    </>
  );
};

export default App;
