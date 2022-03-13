import React from 'react';
import {NavbarComponent, Profile, Overview} from './components';
import { Container, Col, Row } from 'react-bootstrap';

function App() {
  return (
    <>
   <NavbarComponent />
   <div className="mt-3">
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12} md={4}>
              <Profile />
            </Col>
            <Col xs={12} md={8}>
              <Overview />
            </Col>
          </Row>
        </Container>
      </div>
   </>
  );
}

export default App;
