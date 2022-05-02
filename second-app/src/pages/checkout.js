import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
export class checkout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <form>
          <Row>
            <Col xs={12}>
              <h1>Witamy przy kasie!</h1>
              <h2>Podaj dane do wysyłki:</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} xl={4}>
              <p>Imię:</p>
              <input type="text" name="firstname" />
              <p>Nazwisko:</p>
              <input type="text" name="lastname" />
            </Col>
          </Row>
        </form>
      </Container>
    );
  }
}

export default checkout;
